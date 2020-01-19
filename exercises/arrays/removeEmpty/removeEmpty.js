/**
 * Given an array of strings, return a new array with all the elements
 * of the original array except null, undefined, and the empty string ''.
 *
 * @example
 * removeEmpty([null, '', '']); // => []
 * removeEmpty(['Jesse', undefined, 'Farmer']); // => ['Jesse', 'Farmer']
 * removeEmpty(['one', '', 'two', '', 'three']); // => ['one', 'two', 'three']
 *
 * @param {string[]} array - An array of strings
 * @returns {string[]} A new array consisting of all the non-empty values in the
 *   input array.
 */
function removeEmpty(array) {
  const newArray = [];
  for (let element of array){
    if (element){
      newArray.push(element);
    }
    if (element === 0){
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
  console.log('Running sanity checks for removeEmpty:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(outputEqualsExpected(removeEmpty(['', null, undefined, 'HELLO']), ['HELLO']));
  console.log(outputEqualsExpected(removeEmpty([0,1,2,3]), [0,1,2,3]));
}

module.exports = removeEmpty;
