export function swap(/** @type {number[]} */ arr, /** @type {number} */ i, /** @type {number} */ j) {
  // simple, creates temp variable
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  // advanced, seems slower
  // [arr[i], arr[j]] = [arr[j], arr[i]];
}
