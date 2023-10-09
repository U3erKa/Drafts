import { test as esm } from './exports.mjs';
import { test as cjs } from './exports.cjs';

console.log(esm, cjs);
