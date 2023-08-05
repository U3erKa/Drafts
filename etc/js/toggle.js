function toggle(/** @type {number[]} */ array, /** @type {number} */ number) {
  const hasValue = array.includes(number)
  return hasValue ? array.filter((num) => num !== number) : [...array, number]
}

console.log(toggle([1, 2], 3))
console.log(toggle([1, 2], 2))
