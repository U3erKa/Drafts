import {
  merge,
  getNumberOfDigits,
  getDigit,
  heapify,
  swap,
  siftDown,
  partition,
  isSorted,
  shuffle,
} from "./sortingUtils"

/** Probably the easiest to implement. The slowest feasible sort\
 * Complexity O(n^2) */
export function bubbleSort(/** @type {number[]} */ arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

export function cocktailShakerSort(/** @type {number[]} */ arr) {
  let isSorted = true
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        isSorted = true
      }
    }

    if (!isSorted) break
    isSorted = false

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
        isSorted = true
      }
    }
  }

  return arr
}

export function gnomeSort(/** @type {number[]} */ arr) {
  let i = 1 // start at 1 because we're comparing i-1 to i
  let j = 2 // start at 2 because we're comparing i-1 to i
  while (i < arr.length) {
    if (arr[i - 1] <= arr[i]) {
      i = j
      j++
    } else {
      swap(arr, i - 1, i)
      i--
      if (i === 0) {
        i = j
        j++
      }
    }
  }
  return arr
}

/** Sorts array by finding minimum value in the array and puts it at the beginning\
 * Complexity O(n^2) */
export function selectionSort(/** @type {number[]} */ arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      swap(arr, min, i)
    }
  }
  return arr
}

/** Good for almost sorted array\
 * Complexity O(n^2) */
export function insertionSort(/** @type {number[]} */ arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1

    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

/** Works similarly to Array.prototype.sort, less memory efficient than quickSort\
 * Complexity O(n * log n)
 * @returns {number[]} */
export function mergeSort(/** @type {number[]} */ arr) {
  const mid = arr.length / 2

  if (arr.length < 2) {
    return arr
  }

  const left = arr.splice(0, mid)
  return merge(mergeSort(left), mergeSort(arr))
}

/** Ancient sorting method, only works on ints
 * Complexity O(n) */
export function radixSort(/** @type {number[]} */ arr) {
  let maxDigits = 0

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]))
  }

  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => [])

    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i)
      // @ts-expect-error
      buckets[digit].push(arr[j])
    }

    arr = [].concat(...buckets)
  }

  return arr
}

export function heapSort(/** @type {number[]} */ arr) {
  let len = arr.length
  let end = len - 1
  heapify(arr, len)
  while (end > 0) {
    swap(arr, end--, 0)
    siftDown(arr, 0, end)
  }
  return arr
}

export function shellSort(/** @type {number[]} */ arr) {
  const len = arr.length
  let gap = Math.floor(len / 2)

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i
      let current = arr[i]
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = current
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

/** Quick, memory efficient sorting method\
 * Complexity O(n log n)
 * @returns {number[]} */
export function quickSort(/** @type {number[]} */ arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    // @ts-expect-error
    return
  }

  let pivotIndex = partition(arr, left, right)
  quickSort(arr, left, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, right)

  return arr
}

/** An easier to understand version of quick sort which defeats the reason why
 * quickSort is the fastest sorting method\
 * Complexity O(n log n) */
export function quickSortCheatMode(/** @type {number[]} */ arr) {
  if (arr.length <= 1) return arr
  let pivot = arr[0]
  let left = arr.filter((x) => x < pivot)
  let right = arr.filter((x) => x > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

/** @deprecated use `quickSort` instead
 * @returns {number[]} */
export function _quickSort(/** @type {number[]} */ arr) {
  if (arr.length < 2) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [..._quickSort(left), pivot, ..._quickSort(right)]
}

/** Best sorting ever */
export function jsSort(/** @type {number[]} */ arr) {
  return arr.sort((a, b) => a - b)
}

/** This is gonna NUKE your app\
 * Relies on pure random */
export function bogoSort(/** @type {number[]} */ arr) {
  while (!isSorted(arr)) {
    arr = shuffle(arr)
  }

  return arr
}
