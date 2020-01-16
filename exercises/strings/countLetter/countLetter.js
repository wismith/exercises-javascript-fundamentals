/**
 * Given an input string and a target letter, returns the number of times
 * the target letter appears in the string.
 *
 * @param {string} string - The string to search
 * @param {string} letter - The target letter
 * @returns {string} The number of times target letter appears in input string
 */

function countLetter(string, letter) {
  // This is your job. :)
  let letterCount = 0;
  for (let char of string) {
    if (char === letter){
      letterCount++;
    }
  }
  return letterCount;
}

if (require.main === module) {
  console.log('Running sanity checks for countLetter:');

  console.log(countLetter('mississippi', 's')); // should be 4
  console.log(countLetter('dog', 'g')); // should be 1
  console.log(countLetter('fffff', 'f')); // should be 5
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countLetter;
