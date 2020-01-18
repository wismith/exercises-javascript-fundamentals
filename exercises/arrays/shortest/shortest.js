/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  let shortestSoFar = array[0];
  for (let element of array){
    if (element.length < shortestSoFar.length){
      shortestSoFar = element;
    }
  }
  return shortestSoFar;
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(shortest(['hi', 'mom', 'how', 'are', 'you', 'today'])==='hi');
  console.log(shortest(['my', 'name', 'is', 'will'])==='my');
}

module.exports = shortest;
