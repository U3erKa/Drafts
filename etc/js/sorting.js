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
