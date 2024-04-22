export function nanoid() {
  return BigInt(parseInt(crypto.randomUUID().replace(/-/g, ''), 16)).toString(36);
}
