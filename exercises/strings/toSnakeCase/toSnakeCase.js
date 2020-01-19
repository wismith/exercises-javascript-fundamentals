/**
 * Given an input string, returns a copy of the string in snake case.
 *
 * In snake case, every letter is lowercase and spaces are replaced
 * with underscores.
 *
 * See https://en.wikipedia.org/wiki/Snake_case
 *
 * @example
 * toSnakeCase('HeLlo fRIENds'); // => 'hello_friends'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A snake-case copy of the input string
 */

function toSnakeCase(string) {
  let stringSnake = '';
  for (let char of string){
    let charCode = char.charCodeAt();
    if (charCode === 32){
      stringSnake += String.fromCharCode(95);
    } else if (charCode >= 65 && charCode <= 90){
      stringSnake += String.fromCharCode(charCode + 32);
    } else {
      stringSnake += char;
    }
  }
  return stringSnake;
}

if (require.main === module) {
  console.log('Running sanity checks for toSnakeCase:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(toSnakeCase('Hello Friends') === 'hello_friends');
  console.log(toSnakeCase('I AM GOING TO THE STORE') === 'i_am_going_to_the_store');
}

module.exports = toSnakeCase;
