import { test as esm } from './exports.mjs';
import { test as cjs } from './exports.cjs';

console.log('imports.mjs', esm, cjs);

export { esm, cjs };
