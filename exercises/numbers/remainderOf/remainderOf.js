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
function remainderOf(num1,num2) {
  /*
    This is your job. :)

    If you're not sure, step out of the code and use pen + paper. Start
    with simple examples and pay attention to the process you carry out.
  */

  // First, I have to divide the two numbers
  let dividend = num1/num2;
  // Then, I create an if/then based on whether the division is even.
  if (dividend - Math.floor(dividend) === 0){  // Math.floor() finds the greatest integer of a number
    return 0;
  } else {
    return num1 - num2 * Math.floor(dividend);
  }
}

if (require.main === module) {
  console.log('Running sanity checks for remainderOf');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(remainderOf(10,2)); // should be 0
  console.log(remainderOf(10,3)); // should be 1
  console.log(remainderOf(10,5)); // should be 0
  console.log(remainderOf(9,2)); // should be 1
}

module.exports = remainderOf;
