export function getNumberOfDigits(/** @type {number} */ num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
