/**
 * Given an input string, returns a copy of the string in title case.
 *
 * For our purposes, title case is words separated by spaces with the
 * first letter of each word being capitalized and every other letter
 * being lowercsae.
 *
 * Don't do anything special with non-alphabetic characters (numbers,
 * puncuation, etc.). Don't worry about special rules like not capializing
 * definite articles (a, an, the, etc).
 *
 * @example
 * toTitleCase('wElCoMe to THE wILD wiLD WEST!'); // => 'Welcome To The Wild Wild West!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function toTitleCase(string) {
  const words = string.split(' ');
  const wordsNew = [];
  for (let word of words){
    let newWord = '';
    for (let i = 0; i < word.length; i++){
      let char = word[i];
      if (i === 0){
        if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
          newWord += String.fromCharCode(char.charCodeAt() - 32);
        } else {
          newWord += char;
        }
      } else {
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
          newWord += String.fromCharCode(char.charCodeAt() + 32);
        } else {
          newWord += char;
        }
      }
    }
    wordsNew.push(newWord);
  }
  return wordsNew.join(' ');
}

if (require.main === module) {
  console.log('Running sanity checks for toTitleCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(toTitleCase('a new hope') === 'A New Hope');
  console.log(toTitleCase('the empire sTRIkes bacK!') === 'The Empire Strikes Back!');
}

module.exports = toTitleCase;
