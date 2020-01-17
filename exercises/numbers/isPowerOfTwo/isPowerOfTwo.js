/**
 * Given a non-negative integer as input, returns `true` if input is a power of `2` and `false` otherwise.
 *
 * A number is a power of `2` if it can be written as `2**k` for some positive integer `k`, where "`**`"
 * represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `81` is not a power of `2` since there's no integer `k` such that `81 === 2**k`.
 *
 * However, `81` _is_ a power of `3` since `81 === 3**4`.
 *
 * @example
 * isPowerOf(2, 2) // => true
 * isPowerOf(3, 3) // => true
 * isPowerOf(10, 2) // => false
 *
 * @param {number} n - The number
 * @param {number} b - The base
 * @returns {boolean} True if the number is a power of the base, false otherwise.
 */
function isPowerOfTwo(num) {
  // Remember, you can assume that num is a positive integer.
  let power = 1;
  while (power < num){
    power *= 2;
  }
  return power === num;

}

if (require.main === module) {
  console.log('Running sanity checks for isPowerOfTwo:');

  // Your sanity checks here.
  console.log(isPowerOfTwo(4)===true);
  console.log(isPowerOfTwo(256)===true);
  console.log(isPowerOfTwo(121)===false);
  console.log(isPowerOfTwo(512)===true);
  console.log(isPowerOfTwo(1) === true);
  console.log(isPowerOfTwo(2)===true);

}

module.exports = isPowerOfTwo;
