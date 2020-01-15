/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  // This is your job. :)
  let wordList = string.split(' ');
  const shortest = [];
  for (word of wordList){
    if (shortest.length === 0){
      shortest.push(word);
    } else if (word.length < shortest[0].length){
      shortest.length = 0;
      shortest.push(word);
    } else if (word.length === shortest[0].length){
      shortest.push(word);
    }
  }
  return shortest;
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  let sentence1 = 'hi what is up'; // 3 shortest words hi, is, up
  let sentence2 = 'i am going to the store'; // shortest word i

  console.log(shortestWord(sentence1));
  console.log(shortestWord(sentence2));

}

module.exports = shortestWord;
