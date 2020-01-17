/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  let letters = string.split('');
  for (let letter of letters){
    if (replacementDict[letter]){
      letters[letters.indexOf(letter)] = replacementDict[letter];
    }
  }
  return letters.join('');
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(replaceCharacters('hello', {'l': '1', 'o':'0'}) === 'he110');
  console.log(replaceCharacters('will', {'w': '7', 'i':'8', 'l':'9'}) === '7899');

}

module.exports = replaceCharacters;
