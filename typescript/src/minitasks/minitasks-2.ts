'use strict';

runTest();

function createNewArray(length: number, min: number, max: number) {
  return new Array(length).fill(undefined).map(() => Math.floor(Math.random() * (max - min) + min));
}

function arrayMinMax(arr: number[]) {
  return [Math.min(...arr), Math.max(...arr)];
}

function showRepeatsInArray(array: any[]) {
  const set = new Set();
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      set.add(array[i]);
    }
  }
  for (const item of set) {
    result.push(item);
  }

  return result;
}

function temperatureInfo(dailyTemperature: number[], threshold: number) {
  const avg = dailyTemperature.reduce((acc, num) => acc + num) / dailyTemperature.length;
  const daysBelowThreshold = dailyTemperature.filter((value) => value < threshold).length;

  return { avg, daysBelowThreshold };
}

function concatArrays(a: any[], b: any[], isFollowing = true) {
  const result = [];
  if (isFollowing) {
    result.push(...a, ...b);
  } else {
    for (let i = 0; i < a.length; i++) {
      result.push(a[i], b[i]);
    }
  }

  return result;
}

function carCostInfo(prices: number[]) {
  const [cheap, expensive] = arrayMinMax(prices);
  const mostExpensive = setResult(expensive);
  const cheapest = setResult(cheap);

  function setResult(value: number) {
    const first = prices.indexOf(value);
    const last = prices.lastIndexOf(value);
    return first !== last ? [first, last] : first;
  }

  return [mostExpensive, cheapest];
}

function getHouseStats(house: number[][][], entrance: number, floor: number, flat: number) {
  const flats = house[entrance][floor];
  const owners = flats[flat];
  const neighbours = flats[1 - flat];
  const livesInEntrance = [];

  for (let i = 0; i < house.length; i++) {
    livesInEntrance.push(house[i].flat().reduce((acc, num) => acc + num));
  }
  const livesManyPeople = house
    .flat(Infinity)
    .map((num, i) => {
      const result = [];
      if (num > 5) {
        result.push(i);
      }
      return result;
    })
    .flat();

  return [[owners, neighbours], livesInEntrance, livesManyPeople];
}

function runTest() {
  const arr = createNewArray(25, 0, 10);
  const dailyTemperature = createNewArray(31, -15, 5);
  const a = [];
  const b = [];
  for (let i = 0; i < 10; i++) {
    a.push(`a${i}`);
    b.push(`b${i}`);
  }
  const prices = createNewArray(10, 1, 10).map((value) => value * 1000);
  const house: number[][][] = [
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
    [[], [], [], [], []],
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 2; k++) {
        house[i][j][k] = Math.ceil(Math.random() * 9);
      }
    }
  }

  console.log(arr);
  console.log(arrayMinMax(arr));
  console.log(showRepeatsInArray(arr));
  console.log(temperatureInfo(dailyTemperature, -10));
  console.log(concatArrays(a, b, true));
  console.log(concatArrays(a, b, false));
  console.log(carCostInfo(prices));
  console.log(house);
  console.log(getHouseStats(house, 0, 0, 0));
}

export { createNewArray, arrayMinMax, showRepeatsInArray, temperatureInfo, concatArrays, carCostInfo };
