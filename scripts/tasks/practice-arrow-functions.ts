const strArray = ['str1', 'str2', 'str3', 'str4', 'str5', 'str6'];
const numArray = [1, 3, 5, 7, 9, 11, 13, 14, 17, 19, 21, 23, 25];

const numOfStrings = (arr: any[]) => arr.filter((element: any) => typeof element === 'string').length;

const calculator = (sign: string, ...numbers: number[]) => {
  switch (sign.trim()) {
    case '+':
      return numbers.reduce((result, currentNumber) => result + currentNumber);
    case '-':
      return numbers.reduce((result, currentNumber) => result - currentNumber);
    case '*':
      return numbers.reduce((result, currentNumber) => result * currentNumber);
    case '/':
      return numbers.reduce((result, currentNumber) => result / currentNumber);
    default:
      return undefined;
  }
};

const biggestNumber = (...numbers: number[]) => Math.max(...numbers);

/*
const biggestNumber = (array) => {
  let i = 0;
  let biggest = array[0];
  const recursion = () => {
    i++;
    if (array[i] > biggest) {
      biggest = array[i];
    }
    if (array[i] === undefined) {
      return biggest;
    }
    recursion();
  };
  recursion();
  return biggest;
};
*/

console.log('numOfStrings()');
console.log(numOfStrings(strArray)); // 6
console.log(numOfStrings(strArray.concat('str7 str7', 'str8'))); // 8
console.log(numOfStrings(strArray.concat('', '', '', ''))); // 10
console.log(numOfStrings(['', '', '', ''])); // 4

console.log('calculator()');
console.log(calculator('+', 100, 5, 2, 10));
console.log(calculator('-', 100, 5, 2, 10));
console.log(calculator('*', 100, 5, 2, 10));
console.log(calculator('/', 100, 5, 2, 10));
console.log(calculator('', 100, 5, 2, 10));

console.log('biggestNumber()');
console.log(biggestNumber(...numArray));
console.log(biggestNumber(20, 10, 35, ...numArray));
console.log(biggestNumber(40, 10, 35, ...numArray));
console.log(biggestNumber(-40, -10, -35, ...numArray));

export { numOfStrings, calculator, biggestNumber };
