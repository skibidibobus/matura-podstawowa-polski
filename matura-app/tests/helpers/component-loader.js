import { fileURLToPath } from 'node:url';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, '../..'); // matura-app directory

let viteServer = null;

export async function getViteServer() {
  if (!viteServer) {
    viteServer = await createServer({
      root: APP_ROOT,
      server: { middlewareMode: true, watch: null, hmr: false },
      appType: 'custom',
      logLevel: 'silent',
    });
  }
  return viteServer;
}

export async function loadComponent(modulePath) {
  const server = await getViteServer();
  return server.ssrLoadModule(modulePath);
}

export function renderComponentToString(Component, props = {}) {
  return renderToString(React.createElement(Component, props));
}

export async function closeViteServer() {
  // If running inside e2e-runner, let e2e-runner's after() hook close it at the very end
  if (process.argv[1]?.includes('e2e-runner') && !new Error().stack?.includes('e2e-runner')) {
    return;
  }
  if (viteServer) {
    await viteServer.close();
    viteServer = null;
  }
}
