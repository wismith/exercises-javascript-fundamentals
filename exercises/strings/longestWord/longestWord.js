/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)

  // I need to create a list of the words in a string
  let wordList = string.split(' ');

  // Create a list of longest word(s) so far - there could be more than one of the same length
  const longest = [wordList[0]];
  for (let word of wordList){
    if (longest.length === 0){
      longest.push(word);
    } else if (word.length > longest[0].length) {
      longest.length = 0;  // empty the list
      longest.push(word);  // add the new, longest word
    } else if (word.length === longest[0].length) {
      longest.push(word); // if this word is same length as longest, add it to the list
    }
  }
  return longest;

  // BUT... how would I account for punctuation? Is there a way to split for multiple separators?
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  let sentence1 = 'Hi Mom how are you doing'; // one word of length 5
  let sentence2 = 'I went to the store today'; // two words of length 5

  console.log(longestWord(sentence1));
  console.log(longestWord(sentence2));


}

module.exports = longestWord;
