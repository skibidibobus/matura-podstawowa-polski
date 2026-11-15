import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createAppServer } from '../index.js';

describe('Backend Auth, Account Generator & Progress Isolation', () => {
  let server;
  let baseUrl;
  let tmpDir;
  let adminToken;
  let student1;
  let student2;

  before(async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'matura-backend-test-'));
    const dbPath = path.join(tmpDir, 'db.json');
    const app = createAppServer({ dbPath, adminPassword: 'TestAdminPassword123' });
    server = app.server;
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const addr = server.address();
    baseUrl = `http://127.0.0.1:${addr.port}`;
  });

  after(async () => {
    await new Promise((resolve) => server.close(resolve));
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it('1. Health endpoint returns ok', async () => {
    const res = await fetch(`${baseUrl}/api/health`);
    assert.equal(res.status, 200);
    const data = await res.json();
    assert.equal(data.ok, true);
    assert.equal(data.usersCount, 1);
  });

  it('2. Admin login succeeds and rejects invalid password', async () => {
    const badRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'wrong' }),
    });
    assert.equal(badRes.status, 401);

    const okRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'TestAdminPassword123' }),
    });
    assert.equal(okRes.status, 200);
    const data = await okRes.json();
    assert.ok(data.token);
    assert.equal(data.user.role, 'admin');
    adminToken = data.token;
  });

  it('3. Admin generates two student accounts with auto-generated credentials', async () => {
    const res1 = await fetch(`${baseUrl}/api/admin/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({ displayName: 'Kasia Nowak' }),
    });
    assert.equal(res1.status, 201);
    student1 = await res1.json();
    assert.match(student1.user.username, /^kasianowak-\d{4}$/);
    assert.equal(student1.plainPassword.length, 10);
    assert.equal(student1.user.role, 'student');

    const res2 = await fetch(`${baseUrl}/api/admin/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({ displayName: 'Marek Kowalski' }),
    });
    assert.equal(res2.status, 201);
    student2 = await res2.json();
    assert.notEqual(student1.user.id, student2.user.id);
  });

  it('4. Student logs in with generated credentials and progress is isolated per account', async () => {
    const login1 = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: student1.user.username, password: student1.plainPassword }),
    });
    assert.equal(login1.status, 200);
    const s1Data = await login1.json();

    // Student cannot access admin endpoints
    const forbiddenRes = await fetch(`${baseUrl}/api/admin/users`, {
      headers: { Authorization: `Bearer ${s1Data.token}` },
    });
    assert.equal(forbiddenRes.status, 403);

    // Save progress for student 1
    const putRes = await fetch(`${baseUrl}/api/progress`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${s1Data.token}`,
      },
      body: JSON.stringify({
        theme: 'light',
        activeCourse: 'kurs',
        activeLevelByCourse: { probna: 1, ustna: 101, kurs: 'dept-04' },
        checkedNotes: { 'kn4-1': true },
        cardStatus: { 'kf4-1': 'known' },
        quizScores: { 'dept-04': 11 },
      }),
    });
    assert.equal(putRes.status, 200);

    // Student 2 logs in and has clean default progress (zero leakage)
    const login2 = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: student2.user.username, password: student2.plainPassword }),
    });
    assert.equal(login2.status, 200);
    const s2Data = await login2.json();
    assert.deepEqual(s2Data.progress.checkedNotes, {});
    assert.deepEqual(s2Data.progress.quizScores, {});

    // Re-fetch student 1 progress
    const getS1 = await fetch(`${baseUrl}/api/progress`, {
      headers: { Authorization: `Bearer ${s1Data.token}` },
    });
    const getS1Data = await getS1.json();
    assert.equal(getS1Data.progress.checkedNotes['kn4-1'], true);
    assert.equal(getS1Data.progress.quizScores['dept-04'], 11);
  });

  it('5. Admin can reset password and delete student account', async () => {
    const resetRes = await fetch(`${baseUrl}/api/admin/users/${student1.user.id}/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({}),
    });
    assert.equal(resetRes.status, 200);
    const { plainPassword: newPass } = await resetRes.json();
    assert.notEqual(newPass, student1.plainPassword);

    const newLogin = await fetch(`${baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: student1.user.username, password: newPass }),
    });
    assert.equal(newLogin.status, 200);

    const delRes = await fetch(`${baseUrl}/api/admin/users/${student2.user.id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    assert.equal(delRes.status, 200);
  });

  it('6. Leaderboard excludes admin and ranks students by XP; admin can reset progress and inspect/clear logs', async () => {
    const lbRes = await fetch(`${baseUrl}/api/leaderboard`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    assert.equal(lbRes.status, 200);
    const lbData = await lbRes.json();
    assert.equal(lbData.leaderboard.length, 1);
    assert.equal(lbData.leaderboard[0].username, student1.user.username);
    assert.equal(lbData.leaderboard[0].rank, 1);
    assert.ok(lbData.leaderboard[0].stats.xp > 0);

    // Admin logs contain login, user_created, progress_sync, password_reset, user_deleted
    const logsRes = await fetch(`${baseUrl}/api/admin/logs`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    assert.equal(logsRes.status, 200);
    const logsData = await logsRes.json();
    assert.ok(logsData.logs.length >= 4);
    assert.ok(logsData.logs.some((l) => l.type === 'progress_sync'));

    // Admin resets student1 progress
    const resetProgRes = await fetch(`${baseUrl}/api/admin/users/${student1.user.id}/reset-progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({}),
    });
    assert.equal(resetProgRes.status, 200);

    const lbAfterReset = await fetch(`${baseUrl}/api/leaderboard`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    const lbAfterData = await lbAfterReset.json();
    assert.equal(lbAfterData.leaderboard[0].stats.xp, 0);

    // Clear logs
    const clearRes = await fetch(`${baseUrl}/api/admin/logs`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    assert.equal(clearRes.status, 200);
  });

  it('7. Admin can export backup and import/merge backup without deleting existing accounts', async () => {
    const exportRes = await fetch(`${baseUrl}/api/admin/backup`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    assert.equal(exportRes.status, 200);
    const exportData = await exportRes.json();
    assert.ok(Array.isArray(exportData.backup.users));
    assert.equal(exportData.persistence.mode, 'local-json');

    // Import a backup containing an additional student while keeping existing student1
    const importRes = await fetch(`${baseUrl}/api/admin/backup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify({
        backup: {
          users: [
            {
              id: 'usr-restored-1',
              username: 'hubert-restored',
              displayName: 'Hubert',
              role: 'student',
              passwordHash: student1.user ? 'salt:hash' : 'salt:hash',
            },
          ],
          progressByUserId: {
            'usr-restored-1': {
              theme: 'dark',
              activeCourse: 'kurs',
              activeLevelByCourse: { probna: 1, ustna: 101, kurs: 'dept-02' },
              checkedNotes: { 'kn1-1': true },
              cardStatus: { 'kf1-1': 'known' },
              quizScores: { 'dept-01': 12 },
            },
          },
          logs: [],
        },
      }),
    });
    assert.equal(importRes.status, 200);
    const importSummary = await importRes.json();
    assert.equal(importSummary.importedUsers, 1);

    const lbRes = await fetch(`${baseUrl}/api/leaderboard`, {
      headers: { Authorization: `Bearer ${adminToken}` },
    });
    const lbData = await lbRes.json();
    assert.equal(lbData.leaderboard.length, 2);
    assert.equal(lbData.leaderboard[0].username, 'hubert-restored');
    assert.equal(lbData.leaderboard[0].stats.notesCount, 1);
  });
});
