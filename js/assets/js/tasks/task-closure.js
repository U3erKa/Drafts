// function createAdder(a) {
//   let num = a;
//   return function adder(a) {
//     return (num += a);
//   };
// }
const createAdder = (state) => (insideAdder = (number) => (state += number));

const adder = createAdder(50);
console.log(adder(100));
console.log(adder(100));
console.log(adder(100));
