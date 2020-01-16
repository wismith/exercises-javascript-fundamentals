/**
 * Given a temperature in Celsius, return the temperature in Fahrenheit.
 *
 * @param {number} temp - The temperature in Celsius
 * @returns {boolean} The temperature in Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return temp*(9/5) + 32;
}

if (require.main === module) {
  console.log('Running sanity checks for celsiusToFahrenheit:');

  console.log(celsiusToFahrenheit(0) === 32);
  console.log(celsiusToFahrenheit(100) === 212);
}

module.exports = celsiusToFahrenheit;
