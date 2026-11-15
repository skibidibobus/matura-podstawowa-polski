/**
 * Matura Podstawowa — Kompletny Kurs CKE (Formuła 2023 / 2025–2026)
 * matura-app/src/data/course/index.js
 */

import { DEPT_01 } from './dept01_technika_jezyk.js';
import { DEPT_02 } from './dept02_antyk_sredniowiecze.js';
import { DEPT_03 } from './dept03_renesans_barok_oswiecenie.js';
import { DEPT_04 } from './dept04_romantyzm.js';
import { DEPT_05 } from './dept05_pozytywizm.js';
import { DEPT_06 } from './dept06_mloda_polska.js';
import { DEPT_07 } from './dept07_dwudziestolecie.js';
import { DEPT_08 } from './dept08_wojna_okupacja.js';
import { DEPT_09 } from './dept09_wspolczesnosc.js';
import { DEPT_10 } from './dept10_motywy_wypracowanie.js';

export {
  DEPT_01,
  DEPT_02,
  DEPT_03,
  DEPT_04,
  DEPT_05,
  DEPT_06,
  DEPT_07,
  DEPT_08,
  DEPT_09,
  DEPT_10,
};

export const COURSE_DEPARTMENTS = [
  DEPT_01,
  DEPT_02,
  DEPT_03,
  DEPT_04,
  DEPT_05,
  DEPT_06,
  DEPT_07,
  DEPT_08,
  DEPT_09,
  DEPT_10,
];

export const ALL_COURSE_NOTES = COURSE_DEPARTMENTS.flatMap((d) => d.notes);
export const ALL_COURSE_FLASHCARDS = COURSE_DEPARTMENTS.flatMap((d) => d.flashcards);
export const ALL_COURSE_QUIZZES = COURSE_DEPARTMENTS.flatMap((d) => d.quiz);

export function getDepartmentById(deptId) {
  return COURSE_DEPARTMENTS.find((d) => d.id === deptId) || COURSE_DEPARTMENTS[0];
}
