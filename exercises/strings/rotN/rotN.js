/**
 * Given an input string and positive integer N, returns a ROT-N
 * copy of the string.
 *
 * ROT-N is just like ROT-13 except that we specify the number
 * instead of only using 13.
 *
 * Play with https://rot13.com/, you can change the N.
 *
 * @example
 * rotN('Hello, world!', 13); // => 'Uryyb, jbeyq!'
 * rotN('Hello, world!', 9); // => 'Qnuux, fxaum!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rotN(string,n) {
  let stringLower = string.toLowerCase();
  const alphabet2x = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let newString = '';
  for (let char of stringLower){
    if (alphabet2x.includes(char)){
      newString += alphabet2x[alphabet2x.indexOf(char) + n];
    } else {
      newString += char;
    }
  }
  return newString;

}

if (require.main === module) {
  console.log('Running sanity checks for rotN:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(rotN('Hello, world!', 13) === 'uryyb, jbeyq!');
  console.log(rotN('Hello, world!', 9) === 'qnuux, fxaum!');

}

module.exports = rotN;
