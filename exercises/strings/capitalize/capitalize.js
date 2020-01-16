/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(string) {
  // This is your job. :)
  let firstLetter = string.slice(0,1).toUpperCase(); // Used slice and toUpperCase to isolate first letter and capitalize it
  let finalString = firstLetter + string.slice(1); // Stitched together the new first letter and the remaining string
  return finalString;
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(capitalize('will') === 'Will');
  console.log(capitalize('supercalifragilisticexpialidocious') === 'Supercalifragilisticexpialidocious');

}

module.exports = capitalize;
