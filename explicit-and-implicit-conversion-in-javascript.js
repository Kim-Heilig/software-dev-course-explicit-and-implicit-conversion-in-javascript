/**
 * Part 1: Debugging Challenge
 * The JavaScript code below contains intentional bugs related to type conversion.
 * Please do the following:
 *   - Run the script to observe unexpected outputs.
 *   - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
 *   - Annotate the code with comments explaining why the fix works.
 *
 * Part 2: Write Your Own Examples
 * Write their own code that demonstrates:
 *   - One example of implicit type conversion.
 *   - One example of explicit type conversion.
 *
 * We encourage you to:
 * Include at least one edge case, like NaN, undefined, or null .
 * Use console.log() to clearly show the before-and-after type conversions.
 *
 * @format
 */

console.log(" *********** PART ONE: Debugging Challenge ***************");

let result = "5" - 2;
console.log("The result is: " + result); // This works so no bug fix is necessary.  Output is as expected.
//we can explicitly convert this anyway, by writing:

let result2 = Number("5") - 2;
console.log("the result of the explicit conversion is: " + result2);

let isValid = Boolean("false"); // because all strings with any content are truthy, this converts as true
if (isValid) {
  console.log("This is valid!");
}

// to fix/debug, remove the "" around false.

let isValid2 = Boolean(false);
if (isValid2) {
  console.log("This is valid!");
} else {
  console.log("This is NOT valid");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge); // this concatonates the string by converting the number into a string, giving the age 255 instead of 30.

// we can do explicit conversion with Number()

let age2 = Number("25");
let totalAge2 = age2 + 5;
console.log("Total Age2: " + totalAge2);

console.log(
  " *********** PART TWO: Examples of Type Conversion ***************"
);

console.log(" *********** IMPLICIT CONVERSION ***************");

let firstName = "Kim";
let myAge = 50;
let message = firstName + " is " + myAge + " years old";

console.log(message);

// JavaScript implicitly converts the datatype 50 as a string through concatonation.

console.log(" *********** EXPLICIT CONVERSION ***************");

let userName = "Kim";
let userAge = "50";
let userAgeToNumber = Number(userAge);
let userAgeIn2026 = userAgeToNumber + 1;

console.log(userAgeIn2026);
console.log(userName + " will be this age next year: " + userAgeIn2026);

console.log(" *********** TEST CASE ***************");

userName = "SampleKim";
userAge = "fifty";
userAgeToNumber = Number(userAge);
userAgeIn2026 = userAgeToNumber + 1;

console.log(userName + " will be this age next year: " + userAgeIn2026);
