function factorialAlt(number: number) {
  if (typeof number !== 'number' || isNaN(number) || number < 0 || !Number.isInteger(number)) {
    return NaN;
  }
  let result = 1;
  const recursion = (number: number) => {
    if (number > 1) {
      result *= number;
      recursion(number - 1);
    }
  };
  recursion(number);
  return result;
}

const factorial = (number: number): number => {
  if (typeof number !== 'number' || isNaN(number) || number < 0 || !Number.isInteger(number)) {
    return NaN;
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

export { factorialAlt, factorial };
