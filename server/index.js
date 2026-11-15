import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  generateReadablePassword,
  generateReadableUsername,
  hashPassword,
  signToken,
  verifyPassword,
  verifyToken,
} from './auth.js';
import { JsonStore } from './store.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAX_BODY_BYTES = 512 * 1024; // 512 KB

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  });
  res.end(body);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('PAYLOAD_TOO_LARGE'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (chunks.length === 0) return resolve({});
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        reject(new Error('INVALID_JSON'));
      }
    });
    req.on('error', reject);
  });
}

function publicUser(user) {
  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName,
    role: user.role,
    createdAt: user.createdAt,
  };
}

export function createAppServer({
  dbPath = process.env.DATA_FILE || path.join(__dirname, 'data', 'db.json'),
  adminPassword = process.env.ADMIN_PASSWORD || 'MaturaAdmin2026!',
} = {}) {
  const store = new JsonStore(dbPath, adminPassword);

  const server = http.createServer(async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      });
      res.end();
      return;
    }

    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    const pathname = url.pathname;

    try {
      // Health check
      if (req.method === 'GET' && pathname === '/api/health') {
        return sendJson(res, 200, {
          ok: true,
          usersCount: store.listUsers().length,
        });
      }

      // Login
      if (req.method === 'POST' && pathname === '/api/auth/login') {
        const body = await readJsonBody(req);
        const username = String(body.username || '').trim();
        const password = String(body.password || '');
        if (!username || !password) {
          return sendJson(res, 400, { error: 'Podaj login i hasło.' });
        }
        const user = store.findUserByUsername(username);
        if (!user || !verifyPassword(password, user.passwordHash)) {
          return sendJson(res, 401, { error: 'Nieprawidłowy login lub hasło.' });
        }
        const token = signToken(
          { sub: user.id, username: user.username, role: user.role },
          store.getJwtSecret()
        );
        return sendJson(res, 200, {
          token,
          user: publicUser(user),
          progress: store.getProgress(user.id),
        });
      }

      // Auth middleware for protected routes
      const authHeader = req.headers.authorization || '';
      const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
      const claims = verifyToken(token, store.getJwtSecret());
      const currentUser = claims ? store.findUserById(claims.sub) : null;

      if (pathname.startsWith('/api/')) {
        if (!currentUser) {
          return sendJson(res, 401, { error: 'Wymagane zalogowanie (brak lub wygasły token).' });
        }

        // Current user info
        if (req.method === 'GET' && pathname === '/api/auth/me') {
          return sendJson(res, 200, { user: publicUser(currentUser) });
        }

        // Get progress
        if (req.method === 'GET' && pathname === '/api/progress') {
          return sendJson(res, 200, { progress: store.getProgress(currentUser.id) });
        }

        // Save progress
        if (req.method === 'PUT' && pathname === '/api/progress') {
          const body = await readJsonBody(req);
          const progressPayload = body.progress !== undefined ? body.progress : body;
          const saved = store.saveProgress(currentUser.id, progressPayload);
          return sendJson(res, 200, { ok: true, progress: saved });
        }

        // Admin routes
        if (pathname.startsWith('/api/admin/')) {
          if (currentUser.role !== 'admin') {
            return sendJson(res, 403, { error: 'Brak uprawnień administratora.' });
          }

          if (req.method === 'GET' && pathname === '/api/admin/users') {
            return sendJson(res, 200, { users: store.listUsers() });
          }

          if (req.method === 'POST' && pathname === '/api/admin/users') {
            const body = await readJsonBody(req);
            const displayName = String(body.displayName || '').trim();
            let username = String(body.username || '').trim().toLowerCase();
            if (!username) {
              username = generateReadableUsername(displayName);
              while (store.findUserByUsername(username)) {
                username = generateReadableUsername(displayName);
              }
            }
            const plainPassword =
              body.password && String(body.password).trim().length >= 4
                ? String(body.password).trim()
                : generateReadablePassword(10);

            const created = store.createUser({
              username,
              displayName: displayName || username,
              passwordHash: hashPassword(plainPassword),
              role: 'student',
            });

            return sendJson(res, 201, {
              user: publicUser(created),
              plainPassword,
            });
          }

          const resetMatch = pathname.match(/^\/api\/admin\/users\/([^/]+)\/reset-password$/);
          if (req.method === 'POST' && resetMatch) {
            const userId = decodeURIComponent(resetMatch[1]);
            const body = await readJsonBody(req);
            const plainPassword =
              body.password && String(body.password).trim().length >= 4
                ? String(body.password).trim()
                : generateReadablePassword(10);

            const updated = store.updatePassword(userId, hashPassword(plainPassword));
            if (!updated) {
              return sendJson(res, 404, { error: 'Nie znaleziono użytkownika.' });
            }
            return sendJson(res, 200, {
              user: publicUser(updated),
              plainPassword,
            });
          }

          const deleteMatch = pathname.match(/^\/api\/admin\/users\/([^/]+)$/);
          if (req.method === 'DELETE' && deleteMatch) {
            const userId = decodeURIComponent(deleteMatch[1]);
            const deleted = store.deleteUser(userId);
            if (!deleted) {
              return sendJson(res, 404, { error: 'Nie znaleziono użytkownika.' });
            }
            return sendJson(res, 200, { ok: true });
          }
        }
      }

      return sendJson(res, 404, { error: 'Nie znaleziono punktu końcowego API.' });
    } catch (err) {
      if (err.message === 'INVALID_JSON') {
        return sendJson(res, 400, { error: 'Nieprawidłowy format JSON.' });
      }
      if (err.message === 'PAYLOAD_TOO_LARGE') {
        return sendJson(res, 413, { error: 'Zbyt duży rozmiar żądania.' });
      }
      return sendJson(res, 400, { error: err.message || 'Błąd serwera.' });
    }
  });

  return { server, store };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === __filename;
if (isMain) {
  const port = Number(process.env.PORT || 3001);
  const { server } = createAppServer();
  server.listen(port, () => {
    console.log(`Matura Polski Backend running at http://localhost:${port}`);
    console.log(`Default admin login: admin (password from ADMIN_PASSWORD env or MaturaAdmin2026!)`);
  });
}
