const input1 = prompt('Enter 1st number');
const input2 = prompt('Enter 2nd number');

const isFirstNumberBigger = function (num1: string | number, num2: string | number) {
  const result = +num1 > +num2;
  return result;
};

const result = isFirstNumberBigger(input1, input2);
console.log('Is ' + input1 + ' > ' + input2 + '? ' + result);

export { isFirstNumberBigger };
