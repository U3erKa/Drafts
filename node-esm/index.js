import { test as esm } from './exports.mjs';
import { test as cjs } from './exports.cjs';

// (async () => {
//   const esm = (await import('./exports.mjs')).test;
//   const cjs = require('./exports.cjs').test;

//   console.log(esm, cjs);
// })();

console.log(esm, cjs);
