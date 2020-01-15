/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {number} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  // This is your job. :).
  let tempC = (temp-32)*(5/9);
  return tempC;
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');

  // Your sanity checks go here.
  console.log(fahrenheitToCelsius(32) === 0);
  console.log(fahrenheitToCelsius(212) === 100);
}

module.exports = fahrenheitToCelsius;
