let memo0: 'Hello!';
const test0 = async () => console.log(await printHello());

const memo1 = new Map<number, number>();
const test1 = async () => console.log(await increment(1));

function printHello() {
  if (memo0 === undefined) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve((memo0 = 'Hello!'));
      }, 1000),
    );
  }
  return memo0;
}

function increment(number: number) {
  const action = (num: number) => num + 1;
  const calculated = memo1.get(number);

  if (calculated === undefined) {
    return new Promise((resolve) =>
      setTimeout(() => {
        const result = action(number);
        memo1.set(number, result);
        resolve(result);
      }, 1000),
    );
  }
  return memo1.get(number);
}
