/**
 * Given an input string, returns a copy of the string with all-uppercase letters.
 *
 * Don't use JavaScript's built-in string.toUpperCase
 *
 * Only worry about characters in the ASCII range: http://www.asciitable.com/
 *
 * Do nothing to characters that have no corresponding uppercase character, e.g.,
 * don't do anything special for a space, a number, a dash, etc.
 *
 * @example
 * toUpperCase('HelLo fRiends!'); // => 'HELLO FRIENDS!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A uppercase copy of the input string
 */

function toUpperCase(string) {
  let stringUpper = '';
  for (let char of string){
    let charCode = char.charCodeAt();
    if (charCode >= 97 && charCode <= 122){
      stringUpper += String.fromCharCode(charCode - 32);
    } else {
      stringUpper += char;
    }
  }
  return stringUpper;
}

if (require.main === module) {
  console.log('Running sanity checks for toUpperCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(toUpperCase('hello friends')==='HELLO FRIENDS');
  console.log(toUpperCase('hi tHERE!')==='HI THERE!');

}

module.exports = toUpperCase;
