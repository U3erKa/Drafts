const fs = require("fs");

const isPrime = (/** @type {number} */ num) => {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;

  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const validateArray = (/** @type {any[]} */ arr) => {
  arr.forEach((prime) => {
    if (!isPrime(prime)) throw new TypeError("Received array is not an array of primes: found " + prime);
  });
};

const nextPrime = (/** @type {number} */ num) => {
  while (true) {
    if (num === 2) return 3;
    num += 2;
    if (isPrime(num)) return num;
  }
};

const appendPrime = (/** @type {number[]} */ arr) => {
  validateArray(arr);
  // @ts-expect-error
  arr.push(arr.length ? nextPrime(arr.at(-1)) : 2);
};

// const cacheFile = "primes.txt";
const cacheFile = "primes.json";

const cache = (() => {
  try {
    const values = fs.readFileSync(cacheFile, { encoding: "utf8" });
    return JSON.parse(values);

    // const data = values.substring(0, values.length - 1);
    // return JSON.parse(`[${data}]`);
  } catch (error) {
    fs.writeFileSync(cacheFile, "", { encoding: "utf8" });
  }
})();

/** @type {number[]} */
const primes = cache ?? [];
validateArray(primes);

setInterval(() => {
  appendPrime(primes);
  // fs.appendFileSync(cacheFile, `${primes.at(-1)},`, { encoding: "utf8" });
}, 0);

setInterval(() => {
  // fs.writeFileSync(cacheFile, JSON.stringify(primes), { encoding: "utf8" });
  console.log(primes.at(-1));
}, 1000);

setTimeout(() => {
  console.log(primes.at(-1));
  process.exit(0);
}, 1000 * 60);

primes.forEach((prime) => {
  // @ts-expect-error
  console.assert(isPrime(prime), true);
  // console.log(nextPrime(prime));
});
