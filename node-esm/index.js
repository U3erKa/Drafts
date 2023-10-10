import { test as esm1 } from './exports.mjs';
import { test as cjs1 } from './exports.cjs';
import { cjs, esm } from './imports.mjs';
import { cjs as cjs2, esm as esm2 } from './imports.cjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

(async () => {
  const esm = (await import('./exports.mjs')).test;
  const cjs = require('./exports.cjs').test;

  console.log('exports.mjs', esm, cjs);
})();

console.log('exports.cjs', (await esm2).test, cjs2);
