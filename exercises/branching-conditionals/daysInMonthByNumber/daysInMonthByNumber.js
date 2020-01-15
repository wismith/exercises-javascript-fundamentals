/**
 * Given a month (represented as a number between 1 and 12), return the number
 * of days in that month.
 *
 * For example, January is an inpt of 1, February is an input of 2, March is an
 * input of 3, and so on.
 *
 * Assume February has 29 days (no leap years).
 *
 * @example
 * daysInMonthByNumber(1); // => 31
 * daysInMonthByNumber(9); // => 30
 *
 * @param {number} monthNum - A number representing the month, with 1 for January
 *   and 12 for December.
 * @return {number} The number of days in the given month
 */
function daysInMonthByNumber(monthNum) {
  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    throw new Error(`Expected a month number from 1-12, received: ${monthNum}`);
  }

  // This is your job. :)
  let months30 = [4,6,9,11];
  let months31 = [1,3,5,7,8,12];
  if (months30.includes(monthNum)){
    return 30;
  } else if (months31.includes(monthNum)){
    return 31;
  } else {
    return '28 or 29';
  }
}

if (require.main === module) {
  console.log('Running sanity checks for daysInMonthByNumber:');

  console.log(daysInMonthByNumber(1) === 31);
  console.log(daysInMonthByNumber(2) === '28 or 29');
  console.log(daysInMonthByNumber(3) === 31);
  console.log(daysInMonthByNumber(6) === 30);
}

module.exports = daysInMonthByNumber;
