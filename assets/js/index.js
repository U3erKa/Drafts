const countInterval = () => {
  console.time('interval');
  let i = 1;
  const countInterval = setInterval(() => {
    if (i === 20) {
      clearInterval(countInterval);
      console.timeEnd('interval');
    }
    console.log(i++);
  }, 100);
};

const countTimeout = (i = 0) => {
  if (!i) {
    console.time('interval');
  }
  setTimeout(() => {
    console.log(++i);
    if (i === 20) {
      clearTimeout(countInterval);
      console.timeEnd('interval');
    } else {
      countTimeout(i);
    }
  }, 100);
};

const countFor = () => {
  console.time('interval');
  for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
      console.log(i);
      if (i === 20) {
        console.timeEnd('interval');
      }
    }, 100 * i);
  }
};

// countInterval();
// countTimeout();

const btn = document.querySelector('#btn');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 10000);
  reject(69);
});
console.log(promise);
promise.then(
  (resolve) => {
    console.log(resolve);
  },
  (reject) => {
    console.log(reject);
  }
);

/*
setTimeout(() => {
  console.log('showtime');
}, 0);
const goner = setTimeout(
  (value) => {
    console.log(value);
  },
  0,
  'unseen'
);

console.log('where timeout');
console.time('loop timer');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('loop timer');
clearTimeout(goner);

const intervalId = setInterval(() => {
  console.log('interval 1');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

setInterval(() => {
  document.querySelector('#time').textContent = new Date();
}, 1000);
*/
