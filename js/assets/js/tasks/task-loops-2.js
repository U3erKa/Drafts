const numToPower = function (num, mul) {
  let result = num;
  for (let i = 1; i < mul; i++) {
    result *= num;
  }
  return result;
};
