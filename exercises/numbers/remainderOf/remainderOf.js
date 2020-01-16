/**
 * Given two positive, `n` and `d`, returns the remainder of `n` after
 * dividing by `d`.
 *
 * Do not use the built-in modulo operator (`%`). The goal is to gain
 * insight into how the modulo operator works.
 *
 * @example
 * remainderOf(10, 1); // => 0
 * remainderOf(10, 2); // => 0
 * remainderOf(10, 3); // => 1
 * remainderOf(10, 4); // => 2
 * remainderOf(129, 17); // => 10
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is even and false otherwise
 */

  /*
    If you're not sure, step out of the code and use pen + paper. Start
    with simple examples and pay attention to the process you carry out.
  */

  // I NEED TO WRITE THIS FUNCTION USING ONLY SUBTRACTION AND COMPARISON OPERATORS

function remainderOf(num1, num2) {
  while (num1 >= 0){
    num1 -= num2;
  }
  return num1 + num2;
}

if (require.main === module) {
  console.log('Running sanity checks for remainderOf');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(remainderOf(10,2) === 0); // should be 0
  console.log(remainderOf(10,3) === 1); // should be 1
  console.log(remainderOf(10,5) === 0); // should be 0
  console.log(remainderOf(9,2) === 1); // should be 1
}


module.exports = remainderOf;
