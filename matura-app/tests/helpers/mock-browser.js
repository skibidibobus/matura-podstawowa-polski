/**
 * Lightweight pure-JS mock of browser globals required by matura-app:
 * - localStorage (STORAGE_KEY: matura-polski-progress-v1)
 * - document (documentElement.setAttribute/getAttribute for data-theme, getElementById)
 * - window (addEventListener/removeEventListener/dispatchEvent for keyboard shortcuts)
 * - navigator (clipboard.writeText for quiz prompt sharing)
 */

const storage = new Map();
const docAttrs = new Map();
const windowEventListeners = new Map();

export const mockLocalStorage = {
  getItem: (key) => (storage.has(key) ? storage.get(key) : null),
  setItem: (key, val) => {
    storage.set(key, String(val));
  },
  removeItem: (key) => {
    storage.delete(key);
  },
  clear: () => {
    storage.clear();
  },
  get length() {
    return storage.size;
  },
  key: (i) => Array.from(storage.keys())[i] || null,

  // Test inspection & manipulation utilities
  _dump: () => Object.fromEntries(storage.entries()),
  _getJSON: (key) => {
    const raw = storage.get(key);
    return raw ? JSON.parse(raw) : null;
  },
  _setJSON: (key, obj) => {
    storage.set(key, JSON.stringify(obj));
  },
  _setCorrupted: (key, malformedString) => {
    storage.set(key, malformedString);
  },
};

export function setupMockBrowser() {
  globalThis.localStorage = mockLocalStorage;

  globalThis.document = {
    documentElement: {
      setAttribute: (k, v) => docAttrs.set(k, String(v)),
      getAttribute: (k) => docAttrs.get(k) || null,
      removeAttribute: (k) => docAttrs.delete(k),
    },
    getElementById: () => null,
  };

  globalThis.window = {
    addEventListener: (type, handler) => {
      if (!windowEventListeners.has(type)) {
        windowEventListeners.set(type, new Set());
      }
      windowEventListeners.get(type).add(handler);
    },
    removeEventListener: (type, handler) => {
      if (windowEventListeners.has(type)) {
        windowEventListeners.get(type).delete(handler);
      }
    },
    dispatchEvent: (type, event) => {
      if (windowEventListeners.has(type)) {
        for (const handler of windowEventListeners.get(type)) {
          handler(event);
        }
      }
    },
  };

  globalThis.navigator = {
    clipboard: {
      writeText: async (text) => {
        globalThis.__lastCopied = text;
        return Promise.resolve();
      },
    },
  };
}

export function resetMockStorage() {
  storage.clear();
  docAttrs.clear();
  windowEventListeners.clear();
  delete globalThis.__lastCopied;
}

// Auto-initialize browser mocks upon import
setupMockBrowser();
