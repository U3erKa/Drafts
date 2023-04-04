import {
  swap,
} from "./sortingUtils";

/** Probably the easiest to implement. The slowest feasible sort\
 * Complexity O(n^2) */
export function bubbleSort(/** @type {number[]} */ arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

export function cocktailShakerSort(/** @type {number[]} */ arr) {
  let isSorted = true;
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = true;
      }
    }

    if (!isSorted) break;
    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
        isSorted = true;
      }
    }
  }

  return arr;
}
