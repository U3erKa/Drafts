const input1 = prompt('Enter 1st number');
const input2 = prompt('Enter 2nd number');

const isFirstNumberBigger = function (num1: string | null, num2: string | null) {
  if (!num1 || !num2) return null;
  return +num1 > +num2;
};

const result = isFirstNumberBigger(input1, input2);

if (result !== null) console.log('Is', input1, '>', input2, '?', result);

export { isFirstNumberBigger };
