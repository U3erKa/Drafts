export function nanoid() {
  return BigInt(`0x${crypto.randomUUID().replace(/-/g, '')}`).toString(36);
}
