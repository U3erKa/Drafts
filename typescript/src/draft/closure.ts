let value = 500;
function log() {
  console.log(`log ${value}`);
}
function wrapper() {
  // function log() {
  //   console.log(value)
  // }
  let value = 100000;
  console.log(`wrapper ${value}`);
  log();
}
wrapper();

function makeCounter() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    return counter;
  }

  return incrementCounter;
}
function makeCounters() {
  let counter = 0;

  return {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
  };
}
const count1 = makeCounter();
// console.log(count1());
// console.log(count1());
const count2 = makeCounter();
// console.log(count2());
// console.log(count2());

const count3 = makeCounters();
// console.log(count3.increment());
// console.log(count3.increment());
// console.log(count3.increment());
// console.log(count3.decrement());
// console.log(count3.decrement());

export {};
