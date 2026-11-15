import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { hashPassword } from './auth.js';

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
    updatedAt: new Date().toISOString(),
  };
}

const MAX_LOGS = 300;

export function computeProgressStats(progress) {
  const p = progress || DEFAULT_PROGRESS;
  const notesCount = Object.values(p.checkedNotes || {}).filter(Boolean).length;
  const knownCards = Object.values(p.cardStatus || {}).filter((s) => s === 'known').length;
  const reviewCards = Object.values(p.cardStatus || {}).filter((s) => s === 'review').length;
  const quizzesTaken = Object.keys(p.quizScores || {}).length;
  const xp = notesCount * 15 + knownCards * 10 + quizzesTaken * 80;
  return {
    notesCount,
    knownCards,
    reviewCards,
    quizzesTaken,
    xp,
    activeCourse: p.activeCourse || 'probna',
    updatedAt: p.updatedAt || null,
  };
}

export class JsonStore {
  constructor(dbPath, adminPassword = process.env.ADMIN_PASSWORD || 'MaturaAdmin2026!') {
    this.dbPath = dbPath;
    this.adminPassword = adminPassword;
    this.data = this.#loadOrInit();
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
        passwordHash: hashPassword(this.adminPassword),
        createdAt: new Date().toISOString(),
      });
      db.progressByUserId[adminId] = structuredClone(DEFAULT_PROGRESS);
      this.#writeAtomic(db);
    } else if (!fs.existsSync(this.dbPath)) {
      this.#writeAtomic(db);
    }

    return db;
  }

  #writeAtomic(db = this.data) {
    const tmpPath = `${this.dbPath}.${process.pid}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify(db, null, 2), 'utf8');
    fs.renameSync(tmpPath, this.dbPath);
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

  createUser({ username, displayName, passwordHash, role = 'student', initialProgress = null }) {
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
}
