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

export function gnomeSort(/** @type {number[]} */ arr) {
  let i = 1; // start at 1 because we're comparing i-1 to i
  let j = 2; // start at 2 because we're comparing i-1 to i
  while (i < arr.length) {
    if (arr[i - 1] <= arr[i]) {
      i = j;
      j++;
    } else {
      swap(arr, i - 1, i);
      i--;
      if (i === 0) {
        i = j;
        j++;
      }
    }
  }
  return arr;
}

/** Sorts array by finding minimum value in the array and puts it at the beginning\
 * Complexity O(n^2) */
export function selectionSort(/** @type {number[]} */ arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }
  return arr;
}
