export function nanoid() {
  return BigInt(`0x${crypto.randomUUID().replace(/-/g, '')}`).toString(36);
}

let _uniqueIdNum = 0;
/** Generates a unique ID. If `prefix` is given, the ID is appended to it */
export function uniqueId(prefix: unknown) {
  return `${prefix?.toString() ?? ''}${++_uniqueIdNum}`;
}

export function randomInt(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min) + min);
}