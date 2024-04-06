import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(path.join(__dirname, '/dist', 'index.html'));
console.log('index.ts');

(async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 0);
  });
  const data = await promise;
  // console.log(data);
})();

async function readdir() {
  try {
    const filesArr = await fs.readdir(__dirname);
    const hiddenFiles = filesArr.filter((filename: string) => filename[0] === '.');
    console.log(hiddenFiles);
  } catch (error) {
    console.log(error);
  }
}
// readdir();

const sumOfThree = (num1: number, num2: number, num3: number) => num1 + num2 + num3;

const curriedSum = (num1: number) => (num2: number) => (num3: number) => num1 + num2 + num3;

function curry(func: (...args: unknown[]) => unknown) {
  return function curried(...args: unknown[]) {
    if (args.length >= func.length) {
      // @ts-expect-error
      return func.apply(this, args);
    } else {
      return function (...args2: unknown[]) {
        // @ts-expect-error
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedSum1 = (value: number) => {
  const sum = (arg?: number) => {
    if (arg) {
      value += arg;
      return sum;
    }
    return value;
  };
  return sum;
};

// @ts-ignore
console.log(curriedSum1(1)(2)(3)(4)());
