export function merge(/** @type {number[]} */ left, /** @type {number[]} */ right) {
  const arr = /** @type {number[]} */ ([]);
  while (left.length && right.length) {
    arr.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return [...arr, ...left, ...right];
}

export function getDigit(/** @type {number} */ num, /** @type {number} */ place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

export function getNumberOfDigits(/** @type {number} */ num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function heapify(/** @type {number[]} */ arr, /** @type {number} */ len) {
  let mid = Math.floor((len - 2) / 2);
  while (mid >= 0) {
    siftDown(arr, mid--, len - 1);
  }
}

export function siftDown(/** @type {number[]} */ arr, /** @type {number} */ start, /** @type {number} */ end) {
  let root = start;
  let child;
  let toSwap;

  while (root * 2 + 1 <= end) {
    child = root * 2 + 1;
    toSwap = root;
    if (arr[toSwap] < arr[child]) {
      toSwap = child;
    }
    if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
      toSwap = child + 1;
    }
    if (toSwap === root) {
      return;
    } else {
      swap(arr, root, toSwap);
      root = toSwap;
    }
  }
}

export function swap(/** @type {number[]} */ arr, /** @type {number} */ i, /** @type {number} */ j) {
  // simple, creates temp variable
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  // advanced, seems slower
  // [arr[i], arr[j]] = [arr[j], arr[i]];
}

export function partition(/** @type {number[]} */ arr, /** @type {number} */ left, /** @type {number} */ right) {
  let pivotValue = arr[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, right, partitionIndex);
  return partitionIndex;
}

export function shuffle(/** @type {number[]} */ arr) {
  let m = arr.length;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    swap(arr, m, i);
  }

  return arr;
}

export function isSorted(/** @type {number[]} */ arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }

  return true;
}
