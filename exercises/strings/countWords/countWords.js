/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  // This is your job. :)
  return string.split(/ +/).length;  // This seems to work.  Why?
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(countWords('Hi I am going to the store') === 7);
  console.log(countWords('I am a guy from  Alabama') === 6); // two spaces between "from" and "Alabama"
  console.log(countWords('Hello friend   of  mine') === 4); // has instances of single, double, triple space
  
}

module.exports = countWords;
