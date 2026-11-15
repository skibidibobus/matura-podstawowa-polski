import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { hashPassword } from './auth.js';

export const ALL_COURSES = ['probna', 'kurs', 'ustna'];
const LEGACY_FULL_ACCESS_USERNAMES = new Set(['dominik-3607', 'blanka-6113', 'hubert-9626']);

export function sanitizeAllowedCourses(raw) {
  if (!Array.isArray(raw)) return [];
  const seen = new Set();
  for (const c of raw) {
    if (ALL_COURSES.includes(c)) seen.add(c);
  }
  return [...seen];
}

function normalizeUserCourses(user) {
  if (!user || typeof user !== 'object') return user;
  if (user.role === 'admin') {
    user.allowedCourses = [...ALL_COURSES];
  } else if (Array.isArray(user.allowedCourses)) {
    user.allowedCourses = sanitizeAllowedCourses(user.allowedCourses);
  } else if (LEGACY_FULL_ACCESS_USERNAMES.has(String(user.username || '').toLowerCase())) {
    user.allowedCourses = [...ALL_COURSES];
  } else {
    user.allowedCourses = [];
  }
  return user;
}

export const DEFAULT_PROGRESS = {
  theme: 'dark',
  activeCourse: 'kurs',
  activeLevelByCourse: {
    probna: 1,
    ustna: 101,
    kurs: 'dept-01',
  },
  checkedNotes: {},
  cardStatus: {},
  quizScores: {},
  quizAttempts: {},
};

export function sanitizeProgress(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return structuredClone(DEFAULT_PROGRESS);
  }
  const validCourses = ['probna', 'kurs', 'ustna'];
  const validThemes = ['dark', 'light'];
  const savedLevels =
    raw.activeLevelByCourse && typeof raw.activeLevelByCourse === 'object' && !Array.isArray(raw.activeLevelByCourse)
      ? raw.activeLevelByCourse
      : {};

  return {
    theme: validThemes.includes(raw.theme) ? raw.theme : 'dark',
    activeCourse: validCourses.includes(raw.activeCourse) ? raw.activeCourse : 'kurs',
    activeLevelByCourse: {
      probna: savedLevels.probna ?? 1,
      ustna: savedLevels.ustna ?? 101,
      kurs: savedLevels.kurs ?? 'dept-01',
    },
    checkedNotes:
      raw.checkedNotes && typeof raw.checkedNotes === 'object' && !Array.isArray(raw.checkedNotes)
        ? raw.checkedNotes
        : {},
    cardStatus:
      raw.cardStatus && typeof raw.cardStatus === 'object' && !Array.isArray(raw.cardStatus)
        ? raw.cardStatus
        : {},
    quizScores:
      raw.quizScores && typeof raw.quizScores === 'object' && !Array.isArray(raw.quizScores)
        ? raw.quizScores
        : {},
    quizAttempts:
      raw.quizAttempts && typeof raw.quizAttempts === 'object' && !Array.isArray(raw.quizAttempts)
        ? raw.quizAttempts
        : {},
    updatedAt: new Date().toISOString(),
  };
}

const MAX_LOGS = 300;

function classifyNoteCourse(noteId) {
  const id = String(noteId || '');
  if (id.startsWith('kn')) return 'kurs';
  if (id.startsWith('u')) return 'ustna';
  return 'probna';
}

function classifyCardCourse(cardId) {
  const id = String(cardId || '');
  if (id.startsWith('kf')) return 'kurs';
  if (id.startsWith('uf')) return 'ustna';
  return 'probna';
}

function classifyQuizCourse(quizKey) {
  const key = String(quizKey || '');
  if (key.startsWith('dept-')) return 'kurs';
  const num = Number(key);
  if (Number.isFinite(num) && num >= 100) return 'ustna';
  return 'probna';
}

export function computeProgressStats(progress) {
  const p = progress || DEFAULT_PROGRESS;
  const byCourse = {
    probna: { notesCount: 0, knownCards: 0, reviewCards: 0, quizzesTaken: 0, quizAttempts: 0, xp: 0 },
    kurs: { notesCount: 0, knownCards: 0, reviewCards: 0, quizzesTaken: 0, quizAttempts: 0, xp: 0 },
    ustna: { notesCount: 0, knownCards: 0, reviewCards: 0, quizzesTaken: 0, quizAttempts: 0, xp: 0 },
  };

  for (const [noteId, done] of Object.entries(p.checkedNotes || {})) {
    if (!done) continue;
    byCourse[classifyNoteCourse(noteId)].notesCount += 1;
  }

  for (const [cardId, status] of Object.entries(p.cardStatus || {})) {
    const c = classifyCardCourse(cardId);
    if (status === 'known') byCourse[c].knownCards += 1;
    else if (status === 'review') byCourse[c].reviewCards += 1;
  }

  for (const quizKey of Object.keys(p.quizScores || {})) {
    byCourse[classifyQuizCourse(quizKey)].quizzesTaken += 1;
  }

  for (const [quizKey, attempts] of Object.entries(p.quizAttempts || {})) {
    const num = Number(attempts);
    if (Number.isFinite(num) && num > 0) {
      byCourse[classifyQuizCourse(quizKey)].quizAttempts += num;
    }
  }

  for (const c of ['probna', 'kurs', 'ustna']) {
    const s = byCourse[c];
    s.quizAttempts = Math.max(s.quizzesTaken, s.quizAttempts);
    s.xp = s.notesCount * 15 + s.knownCards * 10 + s.quizzesTaken * 80;
  }

  const notesCount = byCourse.probna.notesCount + byCourse.kurs.notesCount + byCourse.ustna.notesCount;
  const knownCards = byCourse.probna.knownCards + byCourse.kurs.knownCards + byCourse.ustna.knownCards;
  const reviewCards = byCourse.probna.reviewCards + byCourse.kurs.reviewCards + byCourse.ustna.reviewCards;
  const quizzesTaken = byCourse.probna.quizzesTaken + byCourse.kurs.quizzesTaken + byCourse.ustna.quizzesTaken;
  const quizAttempts = byCourse.probna.quizAttempts + byCourse.kurs.quizAttempts + byCourse.ustna.quizAttempts;
  const xp = notesCount * 15 + knownCards * 10 + quizzesTaken * 80;

  return {
    notesCount,
    knownCards,
    reviewCards,
    quizzesTaken,
    quizAttempts,
    xp,
    byCourse,
    activeCourse: p.activeCourse || 'probna',
    updatedAt: p.updatedAt || null,
  };
}

export class JsonStore {
  constructor(
    dbPath,
    adminPassword = process.env.ADMIN_PASSWORD || 'MaturaAdmin2026!',
    remoteConfig = {
      gistId: process.env.GIST_ID || '',
      gistToken: process.env.GIST_TOKEN || '',
      gistFile: process.env.GIST_FILE || 'matura-polski-db.json',
    }
  ) {
    this.dbPath = dbPath;
    this.adminPassword = adminPassword;
    this.remoteConfig = remoteConfig;
    this.remoteTimer = null;
    this.remoteInFlight = null;
    this.lastRemoteSyncAt = null;
    this.lastRemoteError = null;
    this.data = this.#loadOrInit();
  }

  hasRemotePersistence() {
    return Boolean(this.remoteConfig?.gistId && this.remoteConfig?.gistToken);
  }

  getPersistenceInfo() {
    return {
      mode: this.hasRemotePersistence() ? 'github-gist' : 'local-json',
      lastSyncedAt: this.lastRemoteSyncAt,
      lastError: this.lastRemoteError,
    };
  }

  async initRemote() {
    if (!this.hasRemotePersistence()) return false;
    try {
      const res = await fetch(`https://api.github.com/gists/${this.remoteConfig.gistId}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${this.remoteConfig.gistToken}`,
          'User-Agent': 'matura-polski-backend',
        },
      });
      if (!res.ok) {
        this.lastRemoteError = `HTTP ${res.status}`;
        return false;
      }
      const gist = await res.json();
      const file = gist?.files?.[this.remoteConfig.gistFile];
      if (!file?.content) return false;
      const parsed = JSON.parse(file.content);
      if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.users)) {
        return false;
      }
      // Hydrate from remote Gist while ensuring admin exists
      if (!parsed.jwtSecret) parsed.jwtSecret = this.data.jwtSecret;
      if (!parsed.progressByUserId || typeof parsed.progressByUserId !== 'object') {
        parsed.progressByUserId = {};
      }
      if (!Array.isArray(parsed.logs)) parsed.logs = [];
      const existingAdmin = parsed.users.find((u) => u.role === 'admin');
      if (!existingAdmin) {
        const currentAdmin = this.data.users.find((u) => u.role === 'admin');
        if (currentAdmin) {
          parsed.users.unshift(currentAdmin);
          parsed.progressByUserId[currentAdmin.id] =
            this.data.progressByUserId[currentAdmin.id] || structuredClone(DEFAULT_PROGRESS);
        }
      } else if (process.env.ADMIN_PASSWORD) {
        existingAdmin.passwordHash = hashPassword(this.adminPassword);
      }
      parsed.users = parsed.users.map(normalizeUserCourses);
      this.data = parsed;
      this.#writeLocalAtomic(this.data);
      this.lastRemoteSyncAt = new Date().toISOString();
      this.lastRemoteError = null;
      return true;
    } catch (err) {
      this.lastRemoteError = err?.message || 'Remote init error';
      return false;
    }
  }

  #scheduleRemoteSync() {
    if (!this.hasRemotePersistence()) return;
    if (this.remoteTimer) clearTimeout(this.remoteTimer);
    this.remoteTimer = setTimeout(() => {
      this.remoteTimer = null;
      this.flushRemoteSync();
    }, 600);
  }

  async flushRemoteSync() {
    if (!this.hasRemotePersistence()) return false;
    if (this.remoteTimer) {
      clearTimeout(this.remoteTimer);
      this.remoteTimer = null;
    }
    const payload = JSON.stringify(this.data, null, 2);
    const run = async () => {
      try {
        const res = await fetch(`https://api.github.com/gists/${this.remoteConfig.gistId}`, {
          method: 'PATCH',
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${this.remoteConfig.gistToken}`,
            'Content-Type': 'application/json',
            'User-Agent': 'matura-polski-backend',
          },
          body: JSON.stringify({
            files: {
              [this.remoteConfig.gistFile]: { content: payload },
            },
          }),
        });
        if (!res.ok) {
          this.lastRemoteError = `HTTP ${res.status}`;
          return false;
        }
        this.lastRemoteSyncAt = new Date().toISOString();
        this.lastRemoteError = null;
        return true;
      } catch (err) {
        this.lastRemoteError = err?.message || 'Remote sync error';
        return false;
      }
    };
    this.remoteInFlight = (this.remoteInFlight || Promise.resolve()).then(run, run);
    return this.remoteInFlight;
  }

  #loadOrInit() {
    const dir = path.dirname(this.dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    let db = null;
    if (fs.existsSync(this.dbPath)) {
      try {
        db = JSON.parse(fs.readFileSync(this.dbPath, 'utf8'));
      } catch {
        db = null;
      }
    }

    if (!db || typeof db !== 'object') {
      db = {
        jwtSecret: process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex'),
        users: [],
        progressByUserId: {},
        logs: [],
      };
    }

    if (!db.jwtSecret) {
      db.jwtSecret = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
    }
    if (!Array.isArray(db.users)) db.users = [];
    if (!db.progressByUserId || typeof db.progressByUserId !== 'object') {
      db.progressByUserId = {};
    }
    if (!Array.isArray(db.logs)) db.logs = [];

    const hasAdmin = db.users.some((u) => u.role === 'admin');
    if (!hasAdmin) {
      const adminId = 'usr-admin';
      db.users.push({
        id: adminId,
        username: 'admin',
        displayName: 'Administrator',
        role: 'admin',
        allowedCourses: [...ALL_COURSES],
        passwordHash: hashPassword(this.adminPassword),
        createdAt: new Date().toISOString(),
      });
      db.progressByUserId[adminId] = structuredClone(DEFAULT_PROGRESS);
      this.#writeLocalAtomic(db);
    } else if (!fs.existsSync(this.dbPath)) {
      this.#writeLocalAtomic(db);
    }

    db.users = db.users.map(normalizeUserCourses);
    return db;
  }

  #writeLocalAtomic(db = this.data) {
    const tmpPath = `${this.dbPath}.${process.pid}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify(db, null, 2), 'utf8');
    fs.renameSync(tmpPath, this.dbPath);
  }

  #writeAtomic(db = this.data) {
    this.#writeLocalAtomic(db);
    this.#scheduleRemoteSync();
  }

  getJwtSecret() {
    return process.env.JWT_SECRET || this.data.jwtSecret;
  }

  findUserByUsername(username) {
    const norm = String(username || '').trim().toLowerCase();
    return this.data.users.find((u) => u.username.toLowerCase() === norm) || null;
  }

  findUserById(id) {
    return this.data.users.find((u) => u.id === id) || null;
  }

  listUsers() {
    return this.data.users.map((u) => {
      const p = this.data.progressByUserId[u.id] || DEFAULT_PROGRESS;
      return {
        id: u.id,
        username: u.username,
        displayName: u.displayName,
        role: u.role,
        allowedCourses: u.role === 'admin' ? [...ALL_COURSES] : sanitizeAllowedCourses(u.allowedCourses),
        createdAt: u.createdAt,
        stats: computeProgressStats(p),
      };
    });
  }

  getLeaderboard() {
    const students = this.data.users
      .filter((u) => u.role !== 'admin')
      .map((u) => {
        const p = this.data.progressByUserId[u.id] || DEFAULT_PROGRESS;
        return {
          id: u.id,
          username: u.username,
          displayName: u.displayName,
          allowedCourses: sanitizeAllowedCourses(u.allowedCourses),
          createdAt: u.createdAt,
          stats: computeProgressStats(p),
        };
      })
      .sort((a, b) => {
        if (b.stats.xp !== a.stats.xp) return b.stats.xp - a.stats.xp;
        if (b.stats.knownCards !== a.stats.knownCards) return b.stats.knownCards - a.stats.knownCards;
        if (b.stats.notesCount !== a.stats.notesCount) return b.stats.notesCount - a.stats.notesCount;
        if (b.stats.quizzesTaken !== a.stats.quizzesTaken) return b.stats.quizzesTaken - a.stats.quizzesTaken;
        return a.displayName.localeCompare(b.displayName, 'pl');
      });

    return students.map((entry, idx) => ({
      ...entry,
      rank: idx + 1,
    }));
  }

  getPublicLeaderboard(course = 'all') {
    const validCourse = ['probna', 'kurs', 'ustna'].includes(course) ? course : 'all';
    const students = this.data.users
      .filter((u) => u.role !== 'admin')
      .map((u) => {
        const p = this.data.progressByUserId[u.id] || DEFAULT_PROGRESS;
        const fullStats = computeProgressStats(p);
        const scoped = validCourse === 'all' ? fullStats : fullStats.byCourse[validCourse];
        return {
          id: u.id,
          displayName: u.displayName,
          stats: {
            notesCount: scoped.notesCount,
            knownCards: scoped.knownCards,
            quizzesTaken: scoped.quizzesTaken,
            quizAttempts: scoped.quizAttempts,
            xp: scoped.xp,
          },
          byCourse: fullStats.byCourse,
        };
      })
      .sort((a, b) => {
        if (b.stats.xp !== a.stats.xp) return b.stats.xp - a.stats.xp;
        if (b.stats.knownCards !== a.stats.knownCards) return b.stats.knownCards - a.stats.knownCards;
        if (b.stats.notesCount !== a.stats.notesCount) return b.stats.notesCount - a.stats.notesCount;
        if (b.stats.quizzesTaken !== a.stats.quizzesTaken) return b.stats.quizzesTaken - a.stats.quizzesTaken;
        return a.displayName.localeCompare(b.displayName, 'pl');
      });

    return students.map((entry, idx) => ({
      ...entry,
      rank: idx + 1,
    }));
  }

  createUser({ username, displayName, passwordHash, role = 'student', allowedCourses = [], initialProgress = null }) {
    const cleanUsername = String(username || '').trim().toLowerCase();
    if (!cleanUsername) throw new Error('Wymagany jest login.');
    if (this.findUserByUsername(cleanUsername)) {
      throw new Error(`Konto o loginie „${cleanUsername}” już istnieje.`);
    }
    const user = {
      id: `usr-${crypto.randomUUID().slice(0, 8)}`,
      username: cleanUsername,
      displayName: String(displayName || cleanUsername).trim(),
      role,
      allowedCourses: role === 'admin' ? [...ALL_COURSES] : sanitizeAllowedCourses(allowedCourses),
      passwordHash,
      createdAt: new Date().toISOString(),
    };
    this.data.users.push(user);
    this.data.progressByUserId[user.id] = initialProgress
      ? sanitizeProgress(initialProgress)
      : structuredClone(DEFAULT_PROGRESS);
    this.#writeAtomic();
    return user;
  }

  updatePassword(userId, passwordHash) {
    const user = this.findUserById(userId);
    if (!user) return null;
    user.passwordHash = passwordHash;
    this.#writeAtomic();
    return user;
  }

  updateAllowedCourses(userId, allowedCourses) {
    const user = this.findUserById(userId);
    if (!user) return null;
    user.allowedCourses =
      user.role === 'admin' ? [...ALL_COURSES] : sanitizeAllowedCourses(allowedCourses);
    this.#writeAtomic();
    return user;
  }

  deleteUser(userId) {
    const idx = this.data.users.findIndex((u) => u.id === userId);
    if (idx === -1) return false;
    if (this.data.users[idx].role === 'admin') {
      throw new Error('Nie można usunąć konta administratora.');
    }
    this.data.users.splice(idx, 1);
    delete this.data.progressByUserId[userId];
    this.#writeAtomic();
    return true;
  }

  getProgress(userId) {
    return this.data.progressByUserId[userId] || structuredClone(DEFAULT_PROGRESS);
  }

  saveProgress(userId, rawProgress) {
    const sanitized = sanitizeProgress(rawProgress);
    this.data.progressByUserId[userId] = sanitized;
    this.#writeAtomic();
    return sanitized;
  }

  resetUserProgress(userId) {
    const user = this.findUserById(userId);
    if (!user) return null;
    if (user.role === 'admin') {
      throw new Error('Nie można zresetować postępu administratora.');
    }
    this.data.progressByUserId[userId] = {
      ...structuredClone(DEFAULT_PROGRESS),
      updatedAt: new Date().toISOString(),
    };
    this.#writeAtomic();
    return user;
  }

  addLog({ type, userId = null, username = '', displayName = '', message = '' }) {
    const entry = {
      id: `log-${crypto.randomUUID().slice(0, 8)}`,
      timestamp: new Date().toISOString(),
      type: String(type || 'info'),
      userId,
      username: String(username || ''),
      displayName: String(displayName || ''),
      message: String(message || ''),
    };
    this.data.logs.unshift(entry);
    if (this.data.logs.length > MAX_LOGS) {
      this.data.logs = this.data.logs.slice(0, MAX_LOGS);
    }
    this.#writeAtomic();
    return entry;
  }

  listLogs({ limit = 150, type = '' } = {}) {
    let items = this.data.logs;
    if (type) {
      items = items.filter((l) => l.type === type);
    }
    return items.slice(0, limit);
  }

  clearLogs() {
    this.data.logs = [];
    this.#writeAtomic();
  }

  exportBackup() {
    return {
      exportedAt: new Date().toISOString(),
      users: structuredClone(this.data.users),
      progressByUserId: structuredClone(this.data.progressByUserId),
      logs: structuredClone(this.data.logs),
    };
  }

  importBackup(backup) {
    if (!backup || typeof backup !== 'object' || !Array.isArray(backup.users)) {
      throw new Error('Nieprawidłowy format pliku kopii zapasowej.');
    }
    let importedUsers = 0;
    let updatedProgress = 0;
    const backupProgress = backup.progressByUserId || {};

    for (const u of backup.users) {
      if (!u || !u.username || !u.passwordHash) continue;
      if (u.role === 'admin') continue; // Never overwrite local admin credentials
      const existing = this.findUserByUsername(u.username);
      if (!existing) {
        const id = u.id || `usr-${crypto.randomUUID().slice(0, 8)}`;
        this.data.users.push({
          id,
          username: String(u.username).trim().toLowerCase(),
          displayName: String(u.displayName || u.username).trim(),
          role: 'student',
          passwordHash: u.passwordHash,
          createdAt: u.createdAt || new Date().toISOString(),
        });
        const srcProg = backupProgress[u.id] || backupProgress[id];
        this.data.progressByUserId[id] = srcProg
          ? sanitizeProgress(srcProg)
          : structuredClone(DEFAULT_PROGRESS);
        importedUsers += 1;
      } else {
        const srcProg = backupProgress[u.id] || backupProgress[existing.id];
        if (srcProg) {
          const curStats = computeProgressStats(this.data.progressByUserId[existing.id]);
          const srcStats = computeProgressStats(srcProg);
          if (srcStats.xp > curStats.xp) {
            this.data.progressByUserId[existing.id] = sanitizeProgress(srcProg);
            updatedProgress += 1;
          }
        }
      }
    }

    if (Array.isArray(backup.logs)) {
      const existingIds = new Set(this.data.logs.map((l) => l.id));
      const merged = [...this.data.logs];
      for (const log of backup.logs) {
        if (log?.id && !existingIds.has(log.id)) {
          merged.push(log);
        }
      }
      merged.sort((a, b) => String(b.timestamp || '').localeCompare(String(a.timestamp || '')));
      this.data.logs = merged.slice(0, MAX_LOGS);
    }

    this.#writeAtomic();
    return { importedUsers, updatedProgress, totalUsers: this.data.users.length };
  }
}
