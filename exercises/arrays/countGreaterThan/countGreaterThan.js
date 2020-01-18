/**
 * Given an array of numbers and a threshold number, return the count of
 * elements in the array strictly greater than the threshold number.
 *
 * "Strictly greater than" means we want numbers greater than (>) and not
 * greater than or equal to (>=).
 *
 * @example
 * countGreaterThan([1, 2, 3, 4, 5], 2); // => 3
 * countGreaterThan([1, 2, 3, 4, 5], 17); // => 0
 * countGreaterThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); // => 5
 * countGreaterThan([10, 10, 10, -10, 15], 10); // => 1
 *
 * @param {number[]} array - An array of numbers
 * @param {number} threshold - The threshold for counting
 * @returns {number} The number of elements in the array greater than threshold
 */
function countGreaterThan(array, threshold) {
  let greaterCount = 0;
  for (let element of array){
    if (element > threshold){
      greaterCount++;
    }
  }
  return greaterCount;
}

if (require.main === module) {
  console.log('Running sanity checks for countGreaterThan:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(countGreaterThan([1,2,3,4,5], 1)===4);
  console.log(countGreaterThan([-1,0,1,2,3], 3)=== 0);
  console.log(countGreaterThan([4,4,4,4,4], 2)===5);
  
}

module.exports = countGreaterThan;
