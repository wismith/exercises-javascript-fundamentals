/**
 * Given a non-negative integer n, returns the n-th Fibonacci numbers.
 *
 * The Fibonacci numbers are defined thus:
 *
 * fib(n): 0  1  1  2  3  5  8  13  21  34  55  ...
 *      n: 0  1  2  3  4  5  6   7   8   9  10  ...
 *
 * That is, starting with 0 and 1, the next Fibonacci number is the sum
 * of the previous two. The "0-th" Fibonacci number is 0 and the first
 * Fibonacci number is 1.
 *
 * See https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * @example
 * fibonacci(0); // => 0
 * fibonacci(1); // => 1
 * fibonacci(10); // => 55
 * fibonacci(12); // => 144
 *
 * @param {number} n - A non-negative integer
 * @returns {number} The fibonacci of num
 */
function fibonacci(n) {
  if (n === 0){
    return 0;
  }
  if (n === 1){
    return 1;
  }
  let fib1 = 0;
  let fib2 = 1;
  let fibNext;
  
  for (let i = 2; i <= n; i++){
    fibNext = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibNext;
  }
  return fibNext;
}

if (require.main === module) {
  console.log('Running sanity checks for fibonacci:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(fibonacci(0) === 0);
  console.log(fibonacci(1) === 1);
  console.log(fibonacci(2) === 1);
  console.log(fibonacci(3) === 2);
  console.log(fibonacci(5) === 5);
  console.log(fibonacci(7) === 13);
  console.log(fibonacci(10) === 55);
}

module.exports = fibonacci;
