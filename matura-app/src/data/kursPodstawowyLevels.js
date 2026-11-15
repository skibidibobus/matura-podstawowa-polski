/**
 * Adapter poziomu kursu podstawowego dla App.jsx i widoków aplikacji
 * matura-app/src/data/kursPodstawowyLevels.js
 */

import { COURSE_DEPARTMENTS } from './course/index.js';

/**
 * KURS_PODSTAWOWY_LEVELS zachowuje 100% kompatybilności z kontraktem LEVELS
 * oczekiwanym przez App.jsx, Sidebar.jsx, NotesView.jsx, FlashcardsView.jsx oraz QuizView.jsx.
 */
export const KURS_PODSTAWOWY_LEVELS = COURSE_DEPARTMENTS;
