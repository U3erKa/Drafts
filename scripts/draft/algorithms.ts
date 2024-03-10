// O(1) - константна складність
const arr = [10, 20, 30, 40];
const res = arr[2];

// O(n) - лінійна складність
function linearSearch<T>(arr: T[], searchItem: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (searchItem === arr[i]) {
      return i;
    }
  }

  return -1;
}

const arr2 = [7, 2, 8, 0, 1, 3, 5, 6, 9];
// O(n^2) - квадратична складність
function bubbleSort(arr: number[]) {
  for (let j = 0; j < arr.length; j++) {
    // цикл що передвигає більше число в кінець
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // меняем два значення місцями в масиві
        const swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }

  return arr;
}

const arr4 = [10, 20, 25, 37, 42, 60, 78, 99, 5000, 9999];
// O(log (n)) - лагарифмічна складність
function binarySearch(arr: number[], searchItem: number) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);

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

export { linearSearch, bubbleSort, binarySearch };
