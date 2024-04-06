import { randomUUID } from 'node:crypto';

console.log(crypto.randomUUID === randomUUID);

const ITERATIONS = 1_000_000;
const TEST1 = 'node:crypto';
const TEST2 = 'node:crypto (disableEntropyCache: false)';
const TEST3 = 'node:crypto (disableEntropyCache: true)';
const TEST4 = 'globalThis.crypto';
const F = { disableEntropyCache: false };
const T = { disableEntropyCache: true };

console.time(TEST1);
for (let i = 0; i < ITERATIONS; i++) {
  randomUUID();
}
console.timeEnd(TEST1);

console.time(TEST2);
for (let i = 0; i < ITERATIONS; i++) {
  randomUUID(F);
}
console.timeEnd(TEST2);

console.time(TEST3);
for (let i = 0; i < ITERATIONS; i++) {
  randomUUID(T);
}
console.timeEnd(TEST3);

console.time(TEST4);
for (let i = 0; i < ITERATIONS; i++) {
  crypto.randomUUID();
}
console.timeEnd(TEST4);
