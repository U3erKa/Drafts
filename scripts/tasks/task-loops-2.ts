const numToPower = function (num: number, mul: number) {
  let result = num;
  for (let i = 1; i < mul; i++) {
    result *= num;
  }
  return result;
};

export { numToPower };
