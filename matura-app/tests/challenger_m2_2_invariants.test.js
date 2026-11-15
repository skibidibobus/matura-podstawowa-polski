/**
 * Empirical Adversarial Test Suite for Milestone 2 (M2_UI_NAVIGATION)
 * Author: Challenger 2 (challenger_m2_2)
 *
 * Verifies:
 * 1. UI Invariants:
 *    - Sidebar renders exactly 3 tabs in .course-switcher: Matura Próbna, Kurs Główny, Matura Ustna
 *    - Active tab has .active and aria-selected="true", inactive tabs have aria-selected="false"
 *    - brand-sub text strictly evaluates across all courses and fallbacks
 *    - Department list when activeCourse === 'kurs' renders exactly 10 items
 *    - displayNum (1..10), code (DZIAŁ 1..10), title, and duration accuracy
 *    - Progress bar calculation: 0, 1, 5, 10 completed, empty array, null/undefined, and NaN protection
 * 2. Accessibility and State Invariants
 * 3. CSS Invariants in index.css
 */

import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { setupMockBrowser } from './helpers/mock-browser.js';
import { loadComponent, renderComponentToString, closeViteServer } from './helpers/component-loader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, '..');

setupMockBrowser();

let Sidebar;
let KURS_PODSTAWOWY_LEVELS;
let totalAssertionsRun = 0;

function recordedAssert(fn, ...args) {
  fn(...args);
  totalAssertionsRun++;
}

describe('Challenger 2 Empirical Verification: Milestone 2 UI Navigation', () => {
  before(async () => {
    const sidebarModule = await loadComponent('/src/components/Sidebar.jsx');
    Sidebar = sidebarModule.Sidebar;

    const levelsModule = await loadComponent('/src/data/kursPodstawowyLevels.js');
    KURS_PODSTAWOWY_LEVELS = levelsModule.KURS_PODSTAWOWY_LEVELS;
  });

  after(async () => {
    await closeViteServer();
    console.log(`\n================================================================================`);
    console.log(`>>> CHALLENGER 2 TOTAL ASSERTIONS EMPIRICALLY VERIFIED: ${totalAssertionsRun} <<<`);
    console.log(`================================================================================\n`);
  });

  // =========================================================================
  // Section 1: Course Switcher 3-Tab Rendering & Accessibility
  // =========================================================================
  describe('1. Course Switcher Tabs & Invariants', () => {
    it('1.1 Sidebar renders exactly 3 tabs with exact labels in order: Matura Próbna, Kurs Główny, Matura Ustna', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        activeLevelId: 'dept-01',
        completedLevelsCount: 0,
        isLevelCompleted: () => false,
      });

      // Locate .course-switcher container
      const switcherMatch = html.match(/<div class="course-switcher"[^>]*>([\s\S]*?)<\/div>/);
      recordedAssert(assert.ok, switcherMatch, 'Must render .course-switcher container');

      const switcherContent = switcherMatch[1];
      const tabMatches = [...switcherContent.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/g)];
      recordedAssert(assert.equal, tabMatches.length, 3, 'Must render exactly 3 tabs in .course-switcher');

      const tabLabels = tabMatches.map((m) => m[1].trim());
      recordedAssert(assert.deepEqual, tabLabels, ['Matura Próbna', 'Kurs Główny', 'Matura Ustna']);
    });

    it('1.2 Container attributes: role="tablist" and aria-label="Wybór kursu"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });

      recordedAssert(assert.match, html, /<div class="course-switcher"\s+role="tablist"\s+aria-label="Wybór kursu">/);
    });

    it('1.3 Tab button attributes: type="button", role="tab"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });

      const buttons = [...html.matchAll(/<button[^>]*class="[^"]*course-tab[^"]*"[^>]*>/g)];
      recordedAssert(assert.equal, buttons.length, 3);
      buttons.forEach((btn) => {
        recordedAssert(assert.match, btn[0], /type="button"/);
        recordedAssert(assert.match, btn[0], /role="tab"/);
      });
    });

    it('1.4 Tab active states and aria-selected when activeCourse === "probna"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'probna',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });

      const switcherContent = html.match(/<div class="course-switcher"[^>]*>([\s\S]*?)<\/div>/)[1];
      const buttons = [...switcherContent.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/g)];

      // Button 0: Matura Próbna (ACTIVE)
      recordedAssert(assert.match, buttons[0][1], /aria-selected="true"/);
      recordedAssert(assert.match, buttons[0][1], /class="[^"]*\bactive\b[^"]*"/);
      recordedAssert(assert.equal, buttons[0][2].trim(), 'Matura Próbna');

      // Button 1: Kurs Główny (INACTIVE)
      recordedAssert(assert.match, buttons[1][1], /aria-selected="false"/);
      recordedAssert(assert.doesNotMatch, buttons[1][1], /\bactive\b/);
      recordedAssert(assert.equal, buttons[1][2].trim(), 'Kurs Główny');

      // Button 2: Matura Ustna (INACTIVE)
      recordedAssert(assert.match, buttons[2][1], /aria-selected="false"/);
      recordedAssert(assert.doesNotMatch, buttons[2][1], /\bactive\b/);
      recordedAssert(assert.equal, buttons[2][2].trim(), 'Matura Ustna');
    });

    it('1.5 Tab active states and aria-selected when activeCourse === "kurs"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });

      const switcherContent = html.match(/<div class="course-switcher"[^>]*>([\s\S]*?)<\/div>/)[1];
      const buttons = [...switcherContent.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/g)];

      // Button 0: Matura Próbna (INACTIVE)
      recordedAssert(assert.match, buttons[0][1], /aria-selected="false"/);
      recordedAssert(assert.doesNotMatch, buttons[0][1], /\bactive\b/);

      // Button 1: Kurs Główny (ACTIVE)
      recordedAssert(assert.match, buttons[1][1], /aria-selected="true"/);
      recordedAssert(assert.match, buttons[1][1], /class="[^"]*\bactive\b[^"]*"/);
      recordedAssert(assert.equal, buttons[1][2].trim(), 'Kurs Główny');

      // Button 2: Matura Ustna (INACTIVE)
      recordedAssert(assert.match, buttons[2][1], /aria-selected="false"/);
      recordedAssert(assert.doesNotMatch, buttons[2][1], /\bactive\b/);
    });

    it('1.6 Tab active states and aria-selected when activeCourse === "ustna"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'ustna',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });

      const switcherContent = html.match(/<div class="course-switcher"[^>]*>([\s\S]*?)<\/div>/)[1];
      const buttons = [...switcherContent.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/g)];

      // Button 0: Matura Próbna (INACTIVE)
      recordedAssert(assert.match, buttons[0][1], /aria-selected="false"/);
      recordedAssert(assert.doesNotMatch, buttons[0][1], /\bactive\b/);

      // Button 1: Kurs Główny (INACTIVE)
      recordedAssert(assert.match, buttons[1][1], /aria-selected="false"/);
      recordedAssert(assert.doesNotMatch, buttons[1][1], /\bactive\b/);

      // Button 2: Matura Ustna (ACTIVE)
      recordedAssert(assert.match, buttons[2][1], /aria-selected="true"/);
      recordedAssert(assert.match, buttons[2][1], /class="[^"]*\bactive\b[^"]*"/);
      recordedAssert(assert.equal, buttons[2][2].trim(), 'Matura Ustna');
    });

    it('1.7 Adversarial tab state when activeCourse is unknown/invalid', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'invalid_course_id',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });

      const switcherContent = html.match(/<div class="course-switcher"[^>]*>([\s\S]*?)<\/div>/)[1];
      const buttons = [...switcherContent.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/g)];

      // None should be active
      buttons.forEach((btn) => {
        recordedAssert(assert.match, btn[1], /aria-selected="false"/);
        recordedAssert(assert.doesNotMatch, btn[1], /\bactive\b/);
      });
    });
  });

  // =========================================================================
  // Section 2: brand-sub Dynamic Subtitle Evaluation
  // =========================================================================
  describe('2. brand-sub Evaluation Across Courses', () => {
    function getBrandSub(html) {
      const match = html.match(/<div class="brand-sub">([\s\S]*?)<\/div>/);
      return match ? match[1].trim() : null;
    }

    it('2.1 activeCourse === "kurs" evaluates strictly to "Kurs 10 Działów CKE • Formuła 2023"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, getBrandSub(html), 'Kurs 10 Działów CKE • Formuła 2023');
    });

    it('2.2 activeCourse === "ustna" evaluates strictly to "Kurs 76 pytań jawnych • CKE 2026–2028"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'ustna',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, getBrandSub(html), 'Kurs 76 pytań jawnych • CKE 2026–2028');
    });

    it('2.3 activeCourse === "probna" evaluates strictly to "Sprint 7h • Matura Próbna"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'probna',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, getBrandSub(html), 'Sprint 7h • Matura Próbna');
    });

    it('2.4 Adversarial: undefined activeCourse safely defaults to "Sprint 7h • Matura Próbna"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: undefined,
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, getBrandSub(html), 'Sprint 7h • Matura Próbna');
    });

    it('2.5 Adversarial: null activeCourse safely defaults to "Sprint 7h • Matura Próbna"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: null,
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, getBrandSub(html), 'Sprint 7h • Matura Próbna');
    });

    it('2.6 Adversarial: arbitrary string activeCourse safely defaults to "Sprint 7h • Matura Próbna"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'matura_2030_random',
        levels: KURS_PODSTAWOWY_LEVELS,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, getBrandSub(html), 'Sprint 7h • Matura Próbna');
    });
  });

  // =========================================================================
  // Section 3: Department List Rendering for Kurs Główny
  // =========================================================================
  describe('3. Department List Rendering & Metadata Invariants', () => {
    it('3.1 Department list renders exactly 10 items for activeCourse === "kurs"', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        activeLevelId: 'dept-01',
        isLevelCompleted: () => false,
      });

      const navMatch = html.match(/<nav class="level-list"[^>]*>([\s\S]*?)<\/nav>/);
      recordedAssert(assert.ok, navMatch, 'Must render <nav class="level-list">');

      const items = [...navMatch[1].matchAll(/<button[^>]*class="[^"]*level-item[^"]*"[^>]*>([\s\S]*?)<\/button>/g)];
      recordedAssert(assert.equal, items.length, 10, 'Department list must render exactly 10 items');
    });

    it('3.2 Each department displays displayNum 1..10 (and never "dept-01") in .level-num badge', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        activeLevelId: 'dept-01',
        isLevelCompleted: () => false,
      });

      const badgeMatches = [...html.matchAll(/<span class="level-num">([\s\S]*?)<\/span>/g)];
      recordedAssert(assert.equal, badgeMatches.length, 10, 'Must have 10 .level-num spans');

      badgeMatches.forEach((m, idx) => {
        const text = m[1].trim();
        const expectedNum = String(idx + 1);
        recordedAssert(assert.equal, text, expectedNum, `Item ${idx} must display "${expectedNum}"`);
        recordedAssert(assert.notEqual, text, `dept-0${idx + 1}`, `Item ${idx} must not display dept-0x string`);
        recordedAssert(assert.notEqual, text, 'dept-10', 'Item 9 must not display dept-10 string');
      });
    });

    it('3.3 Each department displays correct code (DZIAŁ 1..10), title, and duration', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        activeLevelId: 'dept-01',
        isLevelCompleted: () => false,
      });

      const nameMatches = [...html.matchAll(/<div class="level-name">([\s\S]*?)<\/div>/g)];
      // Handle React 19 comment nodes in level-sub (e.g. DZIAŁ 1<!-- --> • <!-- -->75 min)
      const subMatches = [...html.matchAll(/<div class="level-sub">([\s\S]*?)<\/div>/g)];

      recordedAssert(assert.equal, nameMatches.length, 10);
      recordedAssert(assert.equal, subMatches.length, 10);

      KURS_PODSTAWOWY_LEVELS.forEach((dept, idx) => {
        const titleText = nameMatches[idx][1].trim();
        const subRaw = subMatches[idx][1].replace(/<!-- -->/g, '').trim();

        recordedAssert(assert.equal, titleText, dept.title, `Title mismatch at department ${idx + 1}`);
        recordedAssert(assert.equal, subRaw, `${dept.code} • ${dept.duration}`, `Sub mismatch at department ${idx + 1}`);
        recordedAssert(assert.equal, dept.code, `DZIAŁ ${idx + 1}`);
      });
    });

    it('3.4 Completed department renders CheckCircle2 icon instead of number and adds .completed class', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        activeLevelId: 'dept-03',
        isLevelCompleted: (lvl) => lvl.id === 'dept-01' || lvl.id === 'dept-02',
      });

      const items = [...html.matchAll(/<button[^>]*class="([^"]*level-item[^"]*)"[^>]*>([\s\S]*?)<\/button>/g)];
      recordedAssert(assert.equal, items.length, 10);

      // Dept 1: completed
      recordedAssert(assert.match, items[0][1], /\bcompleted\b/);
      recordedAssert(assert.match, items[0][2], /(?:lucide-circle-check|lucide-check-circle-2)/);

      // Dept 2: completed
      recordedAssert(assert.match, items[1][1], /\bcompleted\b/);
      recordedAssert(assert.match, items[1][2], /(?:lucide-circle-check|lucide-check-circle-2)/);

      // Dept 3: active, NOT completed
      recordedAssert(assert.match, items[2][1], /\bactive\b/);
      recordedAssert(assert.doesNotMatch, items[2][1], /\bcompleted\b/);
      recordedAssert(assert.match, items[2][2], /<span class="level-num">3<\/span>/);
    });

    it('3.5 Active level highlight logic and reviewMode suppression', () => {
      // Normal active level
      const normalHtml = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        activeLevelId: 'dept-04',
        reviewMode: false,
        isLevelCompleted: () => false,
      });
      const normalItems = [...normalHtml.matchAll(/<button[^>]*class="([^"]*level-item[^"]*)"[^>]*>/g)];
      recordedAssert(assert.match, normalItems[3][1], /\bactive\b/);
      recordedAssert(assert.doesNotMatch, normalItems[0][1], /\bactive\b/);

      // With reviewMode === true: active level is suppressed
      const reviewHtml = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        activeLevelId: 'dept-04',
        reviewMode: true,
        isLevelCompleted: () => false,
      });
      const reviewItems = [...reviewHtml.matchAll(/<button[^>]*class="([^"]*level-item[^"]*)"[^>]*>/g)];
      reviewItems.forEach((item) => {
        recordedAssert(assert.doesNotMatch, item[1], /\bactive\b/, 'No level item should have active class when reviewMode is true');
      });
    });
  });

  // =========================================================================
  // Section 4: Progress Bar Calculation & Stress Testing
  // =========================================================================
  describe('4. Progress Bar Calculation Invariants & NaN Resilience', () => {
    function extractProgress(html) {
      // Normalize React 19 comment markers
      const cleanHtml = html.replace(/<!-- -->/g, '');
      const pctMatch = cleanHtml.match(/<strong>(\d+)%<\/strong>/);
      const widthMatch = cleanHtml.match(/style="width:\s*([^%"]+)%"/);
      const levelsStatMatch = cleanHtml.match(/<span>Poziomy<\/span>\s*<strong>(\d+)\/(\d+)<\/strong>/);
      return {
        pct: pctMatch ? parseInt(pctMatch[1], 10) : null,
        width: widthMatch ? widthMatch[1].trim() : null,
        completedStat: levelsStatMatch ? parseInt(levelsStatMatch[1], 10) : null,
        totalStat: levelsStatMatch ? parseInt(levelsStatMatch[2], 10) : null,
      };
    }

    it('4.1 0 completed of 10 levels produces strictly 0% without NaN', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        completedLevelsCount: 0,
        isLevelCompleted: () => false,
      });

      const res = extractProgress(html);
      recordedAssert(assert.equal, res.pct, 0);
      recordedAssert(assert.equal, res.width, '0');
      recordedAssert(assert.equal, res.completedStat, 0);
      recordedAssert(assert.equal, res.totalStat, 10);
      recordedAssert(assert.doesNotMatch, html, /NaN/);
    });

    it('4.2 1 completed of 10 levels produces strictly 10%', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        completedLevelsCount: 1,
        isLevelCompleted: () => false,
      });

      const res = extractProgress(html);
      recordedAssert(assert.equal, res.pct, 10);
      recordedAssert(assert.equal, res.width, '10');
      recordedAssert(assert.equal, res.completedStat, 1);
      recordedAssert(assert.equal, res.totalStat, 10);
      recordedAssert(assert.doesNotMatch, html, /NaN/);
    });

    it('4.3 5 completed of 10 levels produces strictly 50%', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        completedLevelsCount: 5,
        isLevelCompleted: () => false,
      });

      const res = extractProgress(html);
      recordedAssert(assert.equal, res.pct, 50);
      recordedAssert(assert.equal, res.width, '50');
      recordedAssert(assert.equal, res.completedStat, 5);
      recordedAssert(assert.equal, res.totalStat, 10);
      recordedAssert(assert.doesNotMatch, html, /NaN/);
    });

    it('4.4 10 completed of 10 levels produces strictly 100%', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: KURS_PODSTAWOWY_LEVELS,
        completedLevelsCount: 10,
        isLevelCompleted: () => false,
      });

      const res = extractProgress(html);
      recordedAssert(assert.equal, res.pct, 100);
      recordedAssert(assert.equal, res.width, '100');
      recordedAssert(assert.equal, res.completedStat, 10);
      recordedAssert(assert.equal, res.totalStat, 10);
      recordedAssert(assert.doesNotMatch, html, /NaN/);
    });

    it('4.5 Empty array levels: [] produces strictly 0% without NaN', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: [],
        completedLevelsCount: 0,
        isLevelCompleted: () => false,
      });

      const res = extractProgress(html);
      recordedAssert(assert.equal, res.pct, 0);
      recordedAssert(assert.equal, res.width, '0');
      recordedAssert(assert.equal, res.completedStat, 0);
      recordedAssert(assert.equal, res.totalStat, 0);
      recordedAssert(assert.doesNotMatch, html, /NaN/);
    });

    it('4.6 Adversarial: levels === undefined produces strictly 0% without crashing or NaN', () => {
      const html = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: undefined,
        completedLevelsCount: 0,
        isLevelCompleted: () => false,
      });

      const res = extractProgress(html);
      recordedAssert(assert.equal, res.pct, 0);
      recordedAssert(assert.equal, res.width, '0');
      recordedAssert(assert.doesNotMatch, html, /NaN/);
    });

    it('4.7 Adversarial: levels === null stress check', () => {
      // In JS, default parameters (levels = []) only activate on undefined, not null.
      // We document that passing null causes levels.map to fail unless guarded.
      try {
        renderComponentToString(Sidebar, {
          activeCourse: 'kurs',
          levels: null,
          completedLevelsCount: 0,
          isLevelCompleted: () => false,
        });
        recordedAssert(assert.ok, true, 'Rendered with null levels');
      } catch (err) {
        // Confirmed finding: Sidebar expects levels to be an array or undefined
        recordedAssert(assert.match, err.message, /Cannot read properties of null/);
      }
    });

    it('4.8 Adversarial: odd count ratio (e.g. 1/3 and 2/3) rounds mathematically (33% and 67%)', () => {
      const oddLevels = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

      const html1 = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: oddLevels,
        completedLevelsCount: 1,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, extractProgress(html1).pct, 33);

      const html2 = renderComponentToString(Sidebar, {
        activeCourse: 'kurs',
        levels: oddLevels,
        completedLevelsCount: 2,
        isLevelCompleted: () => false,
      });
      recordedAssert(assert.equal, extractProgress(html2).pct, 67);
    });
  });

  // =========================================================================
  // Section 5: CSS Design and Responsive Invariants
  // =========================================================================
  describe('5. CSS Responsive Design Invariants in index.css', () => {
    const cssPath = path.join(APP_ROOT, 'src/index.css');

    it('5.1 index.css exists and is readable', () => {
      recordedAssert(assert.ok, fs.existsSync(cssPath));
    });

    it('5.2 .course-switcher defines grid-template-columns: repeat(3, 1fr)', () => {
      const css = fs.readFileSync(cssPath, 'utf-8');
      const switcherBlock = css.match(/\.course-switcher\s*\{([^}]+)\}/);
      recordedAssert(assert.ok, switcherBlock, '.course-switcher CSS rule must exist');
      recordedAssert(assert.match, switcherBlock[1], /display:\s*grid/);
      recordedAssert(assert.match, switcherBlock[1], /grid-template-columns:\s*repeat\(3,\s*1fr\)/);
    });

    it('5.3 .course-tab defines accessible touch target, typography, and line-height', () => {
      const css = fs.readFileSync(cssPath, 'utf-8');
      const tabBlock = css.match(/\.course-tab\s*\{([^}]+)\}/);
      recordedAssert(assert.ok, tabBlock, '.course-tab CSS rule must exist');
      recordedAssert(assert.match, tabBlock[1], /min-height:\s*40px/);
      recordedAssert(assert.match, tabBlock[1], /font-size:\s*0\.74rem/);
      recordedAssert(assert.match, tabBlock[1], /font-weight:\s*600/);
      recordedAssert(assert.match, tabBlock[1], /line-height:\s*1\.22/);
      recordedAssert(assert.match, tabBlock[1], /text-align:\s*center/);
    });
  });
});
