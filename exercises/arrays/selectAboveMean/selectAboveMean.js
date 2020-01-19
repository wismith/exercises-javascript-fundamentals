/**
 * Given an array of numbers, returns a new array consisting of every
 * number in the input array strictly greater than the mean.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectAboveMean([1, 1, 1]); // => []
 * selectAboveMean([-10, -10, 0, 10]); // => [0, 10]
 * selectAboveMean([1, 2, 3, 4, 5]); // => [4, 5]
 * selectAboveMean([100, 0, 100, 200, 100, 0]); // => [100, 100, 200, 100]
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all numbers in the input array
 *   greater than the mean.
 */
function selectAboveMean(array) {
  function getMean(array) {
    let sum = 0;
    for (let num of array){
      sum += num;
    }
    return sum/array.length;
  }
  const mean = getMean(array);

  const newArray = [];
  for (let element of array){
    if (element > mean){
      newArray.push(element);
    }
  }
  return newArray;
}

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
  console.log('Running sanity checks for selectAboveMean:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(outputEqualsExpected(selectAboveMean([1,2,3,4]), [3,4]));
  console.log(outputEqualsExpected(selectAboveMean([1,2,3,100]), [100]));
  

}

module.exports = selectAboveMean;
