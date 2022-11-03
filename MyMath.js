class MyMath {
  static sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
  static sub = (...numbers) => numbers.reduce((acc, num) => acc - num);
  static mul = (...numbers) => numbers.reduce((acc, num) => acc * num);
  static div = (...numbers) => numbers.reduce((acc, num) => acc / num);
}

// CommonJS exporting
// exports.add = MyMath.sum;
// exports.substract = MyMath.sub;
// exports.MyMath = MyMath;
module.exports.add = MyMath.sum;
module.exports.substract = MyMath.sub;
module.exports.MyMath = MyMath;

// ES module
// export const add = MyMath.sum
