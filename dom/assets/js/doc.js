/**
 * Adds two numbers. Do not use for strings concat, please
//  * @param {number|string} num1 first value
 * @param {number} num1 first value
 * @param {number} num2 second value
 * @returns {number} sum of the numbers
 */
function sum(num1, num2) {
  return num1 + num2;
}
/**
 * Adds all numbers
 * @param  {...number} nums array of numbers
//  * @param  {number[]} nums array of numbers
//  * @param  {Array<number>} nums array of numbers
 * @returns sum of all numbers
 */
function sum2(...nums) {
  return nums.reduce((sum, num) => sum + num);
}
/**
 * Says hello to a user
 * @param {object} user User object
 * @param {string} user.firstName First name of the user
 * @param {string} user.lastName Last name of the user
 * @returns greeting string
 */
function greetUser(user) {
  return `Hello ${user.firstName} ${user.lastName}`;
}
