/**
 * Given an array of numbers, return their median. The mean of a list of numbers
 * is the value separating the higher half from the lower half.
 *
 * The median of [1, 2, 14, 199, 5] is 5 because half the numbers in the list are
 * smaller than 5 and half the numbers in the list are larger than 5.
 *
 * If the list has an odd number of elements then there will always be a "middle" value
 * in the list itself and that is taken to be the median. If the list has an even number
 * of elements then the median is taken to be the mean of the two middle elements.
 *
 * See https://en.wikipedia.org/wiki/Median
 *
 * @example
 * median([900, 10, 20]); // => 20 since 20 is the middle element
 * mean([-10, 20, 400, 10]); // => 15 since 10,20 are the middle elements
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The median of the numbers in the array
 */
function median(array) {
  if (array.length % 2 != 0){
    return array.sort()[Math.ceil((array.length-1)/2)];
  } else {
    return (array.sort()[array.length/2 -1] + array.sort()[array.length/2])/2;
  }
}

if (require.main === module) {
  console.log('Running sanity checks for median:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(median([1,2,3,4,5])===3);
  console.log(median([3,4,6,7])===5);
  console.log(median([3,5,1,4,2])===3);
  console.log(median([6,3,4,7])===5);

}

module.exports = median;
