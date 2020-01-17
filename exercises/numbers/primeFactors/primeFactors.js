/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */
function primeFactors(num) {
  /*
    Your code goes here.

    Work out one version that works and don't worry about performance.

    If you're having trouble working it out in code, step out of JS-land
    and use pen/paper, index cards, etc. — anything that helps you think
    about it without getting stuck in JavaScript syntax.
  */

  // first, I need to create a list for prime factors
  const primeFactors = [];
  let workingNumber = num;
  for (let n = 2; n <= num/2; n++){
    while (workingNumber % n === 0){
      primeFactors.push(n);
      workingNumber /= n;
    }
  }
  return primeFactors;
}
// Create function to check arrays
function outputEqualsExpected(output,expected){
  if (output.length !== expected.length){
    return false;
  }

  for (let i = 0; i < output.length; i++){
    if (output[i] !== expected[i]){
      return false;
    }
  }

  return true;
}

if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(outputEqualsExpected(primeFactors(12), [2,2,3]));
  console.log(outputEqualsExpected(primeFactors(15), [3,5]));
  console.log(outputEqualsExpected(primeFactors(121), [11,11]));
  console.log(outputEqualsExpected(primeFactors(64), [2,2,2,2,2,2]));
  // These sanity checks are NOT working, because array === array returns false.  Why?
  
}

module.exports = primeFactors;
