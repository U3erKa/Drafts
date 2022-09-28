// O(1) - константная сложность
const arr = [10, 20, 30, 40];
const res = arr[2];

// O(n) - линейная сложность
function linearSearch(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (searchItem === arr[i]) {
      return i;
    }
  }

  return -1;
}

const arr2 = [7, 2, 8, 0, 1, 3, 5, 6, 9];
// O(n^2) - квадратичная сложность
function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    // цикл который передвигает большее число в конец
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // меняем два значения местами в массиве
        const swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }

  return arr;
}

const arr4 = [10, 20, 25, 37, 42, 60, 78, 99, 5000, 9999];
// O(log (n)) - логарифмическая сложность
function binarySearch(arr, searchItem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);
  // debugger;
  while (start <= end) {
    if (searchItem === arr[middle]) {
      return middle;
    } else if (searchItem > arr[middle]) {
      start = middle + 1;
      middle = Math.floor((start + end) / 2);
    } else {
      end = middle - 1;
      middle = Math.ceil((start + end) / 2);
    }
  }

  return -1;
}
