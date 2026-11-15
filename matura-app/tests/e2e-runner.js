/**
 * Master E2E Test Suite Runner for Matura Podstawowa Course Project
 * Environment: Node.js v20 ESM native (node:test, node:assert/strict)
 * Execution: node tests/e2e-runner.js or npm test
 */

import { after } from 'node:test';
import { setupMockBrowser } from './helpers/mock-browser.js';
import { closeViteServer } from './helpers/component-loader.js';

// 1. Initialize browser globals (localStorage, document, window, navigator)
setupMockBrowser();

console.log('================================================================================');
console.log('  MATURA PODSTAWOWA Z POLSKIEGO — MASTER E2E TEST RUNNER (NODE v20)             ');
console.log('  Scope: Tiers 1–4 (Feature Coverage, Boundaries, Interactions, Scenarios)      ');
console.log('================================================================================\n');

// 2. Sequentially import and execute all 4 test tiers
await import('./tier1_features.test.js');
await import('./tier2_boundaries.test.js');
await import('./tier3_interactions.test.js');
await import('./tier4_scenarios.test.js');

// 3. Gracefully clean up Vite SSR handles upon suite completion with exit-code awareness
after(async () => {
  await closeViteServer();

  const isFailed = process.exitCode !== undefined && process.exitCode !== 0;

  if (!isFailed) {
    console.log('\n================================================================================');
    console.log('  ALL E2E TEST SUITES COMPLETED SUCCESSFULLY (EXIT CODE: 0)                     ');
    console.log('================================================================================');
  } else {
    console.error('\n================================================================================');
    console.error(`  E2E TEST SUITE RUN FAILED (EXIT CODE: ${process.exitCode || 1})`);
    console.error('================================================================================');
  }
  setImmediate(() => process.exit(process.exitCode || 0));
});
