function toggle(array: number[], number: number) {
  const hasValue = array.includes(number);
  return hasValue ? array.filter((num: number) => num !== number) : [...array, number];
}

console.log(toggle([1, 2], 3));
console.log(toggle([1, 2], 2));
