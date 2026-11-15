import { mockLocalStorage } from './mock-browser.js';

export const STORAGE_KEY = 'matura-polski-progress-v1';

export class AppSimulator {
  constructor(initialData = null) {
    if (initialData !== null) {
      if (typeof initialData === 'string') {
        mockLocalStorage._setCorrupted(STORAGE_KEY, initialData);
      } else {
        mockLocalStorage._setJSON(STORAGE_KEY, initialData);
      }
    }
    this.reloadFromStorage();
  }

  reloadFromStorage() {
    let saved = {};
    try {
      const raw = mockLocalStorage.getItem(STORAGE_KEY);
      saved = raw ? JSON.parse(raw) : {};
    } catch {
      saved = {};
    }
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) {
      saved = {};
    }

    this.theme = saved.theme || 'dark';
    this.activeCourse = saved.activeCourse || 'probna';
    this.activeLevelByCourse = {
      probna: 1,
      ustna: 101,
      kurs: 'dept-01',
      ...(saved.activeLevelByCourse || {}),
    };
    this.checkedNotes = saved.checkedNotes || {};
    this.cardStatus = saved.cardStatus || {};
    this.quizScores = saved.quizScores || {};
    this.stage = 'notes';
    this.reviewMode = false;

    // Synchronize DOM theme attribute if document exists
    if (globalThis.document?.documentElement) {
      globalThis.document.documentElement.setAttribute('data-theme', this.theme);
    }
  }

  saveToStorage() {
    try {
      mockLocalStorage._setJSON(STORAGE_KEY, {
        theme: this.theme,
        activeCourse: this.activeCourse,
        activeLevelByCourse: this.activeLevelByCourse,
        checkedNotes: this.checkedNotes,
        cardStatus: this.cardStatus,
        quizScores: this.quizScores,
      });
    } catch (err) {
      // In private browsing or quota exceeded scenarios, simulate App.jsx try/catch
      return false;
    }
    return true;
  }

  selectCourse(course) {
    this.activeCourse = course;
    this.reviewMode = false;
    this.stage = 'notes';
    this.saveToStorage();
  }

  selectLevel(levelId) {
    this.activeLevelByCourse[this.activeCourse] = levelId;
    this.reviewMode = false;
    this.stage = 'notes';
    this.saveToStorage();
  }

  setStage(stage) {
    this.stage = stage;
  }

  toggleNote(noteId) {
    this.checkedNotes[noteId] = !this.checkedNotes[noteId];
    this.saveToStorage();
  }

  setCardStatus(cardId, status) {
    // status: 'known' | 'review'
    this.cardStatus[cardId] = status;
    this.saveToStorage();
  }

  saveQuizScore(levelId, score) {
    this.quizScores[levelId] = Math.max(this.quizScores[levelId] || 0, score);
    this.saveToStorage();
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    if (globalThis.document?.documentElement) {
      globalThis.document.documentElement.setAttribute('data-theme', this.theme);
    }
    this.saveToStorage();
  }

  toggleReviewMode() {
    this.reviewMode = !this.reviewMode;
  }

  getActiveLevel(levels) {
    if (!levels || levels.length === 0) return null;
    const currentId = this.activeLevelByCourse[this.activeCourse] || levels[0].id;
    return levels.find((l) => l.id === currentId) || levels[0];
  }

  isLevelCompleted(level) {
    if (!level || !level.quiz) return false;
    const score = this.quizScores[level.id];
    const passThreshold = Math.ceil(level.quiz.length * 0.75);
    return score !== undefined && score >= passThreshold;
  }

  getReviewCards(levels) {
    const allCards = levels.flatMap((l) => l.flashcards || []);
    return allCards.filter((c) => this.cardStatus[c.id] === 'review');
  }

  calculateStats(levels) {
    const allNotes = levels.flatMap((l) => l.notes || []);
    const allCards = levels.flatMap((l) => l.flashcards || []);
    const completedLevelsCount = levels.filter((l) => this.isLevelCompleted(l)).length;
    const masteredCardsCount = allCards.filter((c) => this.cardStatus[c.id] === 'known').length;
    const masteredNotesCount = allNotes.filter((n) => Boolean(this.checkedNotes[n.id])).length;
    const reviewCount = allCards.filter((c) => this.cardStatus[c.id] === 'review').length;
    const xp = masteredNotesCount * 15 + masteredCardsCount * 10 + completedLevelsCount * 80;
    const progressPct = levels.length ? Math.round((completedLevelsCount / levels.length) * 100) : 0;

    return {
      completedLevelsCount,
      masteredCardsCount,
      masteredNotesCount,
      reviewCount,
      totalCards: allCards.length,
      totalNotes: allNotes.length,
      xp,
      progressPct,
    };
  }
}
