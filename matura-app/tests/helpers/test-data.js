import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CANONICAL_KURS_LEVELS } from './fixture-kurs-levels.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REAL_DATA_PATH = path.resolve(__dirname, '../../src/data/kursPodstawowyLevels.js');

export function hasRealKursFile() {
  return fs.existsSync(REAL_DATA_PATH);
}

export async function loadKursPodstawowyLevels() {
  if (hasRealKursFile()) {
    try {
      const mod = await import('../../src/data/kursPodstawowyLevels.js');
      if (mod.KURS_PODSTAWOWY_LEVELS && Array.isArray(mod.KURS_PODSTAWOWY_LEVELS)) {
        return {
          source: 'src/data/kursPodstawowyLevels.js',
          isRealFile: true,
          levels: mod.KURS_PODSTAWOWY_LEVELS,
        };
      }
    } catch (err) {
      // If syntax or load error in development, fall back with warning
      return {
        source: 'fixture-kurs-levels.js (load error fallback)',
        isRealFile: false,
        error: err.message,
        levels: CANONICAL_KURS_LEVELS,
      };
    }
  }

  return {
    source: 'fixture-kurs-levels.js',
    isRealFile: false,
    levels: CANONICAL_KURS_LEVELS,
  };
}

export { CANONICAL_KURS_LEVELS };
