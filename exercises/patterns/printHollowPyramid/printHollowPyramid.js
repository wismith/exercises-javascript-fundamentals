/*
  Require the printHelpers module, which allows us to do things like print
  characters without always inserting a new line, print characters multiple
  times, etc.
*/
let helpers = require('../printHelpers');

/**
 * Given an integer `height`, prints a solid pyramid `height` characters tall
 * consisting of `#` characters.
 *
 *
 * Note, this PRINTS a pyramid, it does not RETURN a pyramid.
 *
 * @example
 * printHollowPyramid(2); // Prints the following:
 *  #
 * ###
 *
 * @example
 * printHollowPyramid(5); // Prints the following:
 *     #
 *    # #
 *   #   #
 *  #     #
 * #########
 *
 * @param {number} height - The height of the pyramid to print
 */
function printHollowPyramid(height) {
  for (let i = 0; i < height; i++) {
    let numMiddleSpaces = 1 + 2*(i-1);
    let numEndSpaces = height - i - 1;
    let numChars = 1;
    if (i === 0){
      helpers.printCountTimes(' ', numEndSpaces);
      helpers.printCountTimes('#', numChars);
      helpers.printCountTimes(' ', numEndSpaces);
    } else if (i < height - 1 && i > 0){
      helpers.printCountTimes(' ', numEndSpaces);
      helpers.printCountTimes('#', numChars);
      helpers.printCountTimes(' ', numMiddleSpaces);
      helpers.printCountTimes('#', numChars);
      helpers.printCountTimes(' ', numEndSpaces);
    } else {
      numChars = 1 + 2 * (height - 1);
      helpers.printCountTimes('#', numChars);
    }

    helpers.printNewLine();
  }
}

/**
 * For testing purposes, prints a diagram of the given height.
 */
function hollowPyramidPrintTest(height) {
  console.log('');
  console.log(`Printing a HOLLOW PYRAMID of height ${height}:`);

  printHollowPyramid(height);
}

if (require.main === module) {
  hollowPyramidPrintTest(1);
  hollowPyramidPrintTest(2);
  hollowPyramidPrintTest(3);
  hollowPyramidPrintTest(6);
  hollowPyramidPrintTest(8);
}

module.exports = printHollowPyramid;
