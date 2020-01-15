/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  // This is your job. :)

  if (percentGrade < 0){
    throw new Error(`Expect a percent number greater than or equal to 0. Received: ${percentGrade} `);
  }

  let theGrade = undefined
  if (percentGrade < 60){
    theGrade = 'F';
  } else if (percentGrade < 63){
    theGrade = 'D-';
  } else if (percentGrade < 67){
    theGrade = 'D';
  } else if (percentGrade < 70){
    theGrade = 'D+';
  } else if (percentGrade < 73){
    theGrade = 'C-';
  } else if (percentGrade < 77){
    theGrade = 'C';
  } else if (percentGrade < 80){
    theGrade = 'C+';
  } else if (percentGrade < 83){
    theGrade = 'B-';
  } else if (percentGrade < 87){
    theGrade = 'B';
  } else if (percentGrade < 90){
    theGrade = 'B+';
  } else if (percentGrade < 93){
    theGrade = 'A-';
  } else if (percentGrade < 97){
    theGrade = 'A';
  } else {theGrade = 'A+'}
  return theGrade;
}

if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(letterGrade(62) === 'D-');
  console.log(letterGrade(99) === 'A+');
  console.log(letterGrade(55) === 'F');
  console.log(letterGrade(76) === 'C');
}

module.exports = letterGrade;
