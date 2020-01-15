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

  // first, I need to create a list of all factors
  const factorList = [];
  const factorsPrime = [];
  for (let n = 1; n <= num; n++){
    if (num/n - Math.floor(num/n) === 0){
      factorList.push(n);
    }
  }
  for (let factor of factorList){
    const subFactors = [];
    for (let n = 1; n <= factor; n++){
      if (factor/n - Math.floor(factor/n) === 0){
        subFactors.push(n);
      }
    }
    if (subFactors.length === 2){
      factorsPrime.push(factor);
    }
  }
  return factorsPrime;
}

console.log(typeof primeFactors(15));
console.log(typeof [3,5]);
if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(primeFactors(12));
  console.log(primeFactors(15));
  console.log(primeFactors(121));


  console.log(primeFactors(12) === [2,3]);
  console.log(primeFactors(15) === [3,5]);
}

module.exports = primeFactors;
