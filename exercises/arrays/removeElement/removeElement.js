/**
 * Given an array and an element, return a new array with all instances of the
 * given element removed.
 *
 * @example
 * removeElement([1, 1, 1], 1); // => []
 * removeElement([1, 2, 1], 1); // => [2]
 * removeElement(['one', 'two', 'three'], 'two'); // => ['one', 'three']
 * removeElement(['Jesse', undefined, 'Farmer'], undefined); // => ['Jesse', 'Farmer']
 *
 * @param {object[]} array - An array
 * @param {object} element - An element to remove
 * @returns {object[]} A copy of the input array with all instances of the given
 *   element removed.
 */
function removeElement(array, element) {
  const newArray = [];
  for (let item of array){
    if (item !== element){
      newArray.push(item);
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
  console.log('Running sanity checks for removeElement:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(outputEqualsExpected(removeElement([1,2,3,3,4], 3), [1,2,4]));
  console.log(outputEqualsExpected(removeElement(['hi', 'Im', 'Will'], 'hi'), ['Im', 'Will']));

}

module.exports = removeElement;
