/**
 * Here we will learn about Type Coercion in JavaScript.
 * 
 * Type Coercion is the automatic or impicit conversion of values from one datatype to another.
 * 
 * Number to String, String to Number, Boolean to Number, etc.
 * 
 * '==' is used mainly for Type Coercion in JavaScript.
 * 
 * '===' is used to avoid Type Coercion.
 */


/**
 * The following examples will display Type Coercion: 
 */

// String to Number with '+' is just concatenation
var x = 10 + '5'
console.log(x) // outputs 105

// String to Number with other operators is converted to numbers.
var y = 10 * '5'
console.log(y) //outputs 50

// Boolean to number converts the boolean to 1 for true and 0 for false
var testBool = true + 5 // outputs 6
var testingBool = false + 9 // outputs 9

// The equality operator '==' is used mostly for boolean values.
console.log(1 == true) // prints true
console.log(0 == false) // prints true
console.log(1 == false) // prints false
console.log(0 == true) // prints false

// *******************************************************************

/**
 * These following examples will show without type coercion.
 * 
 * '===' is used to avoid type coercion.
 */

// These should all print false because they aren't the same values.
// Why? numbers are not equal to a boolean value.
console.log("Without Type Coercion")
console.log(1 === true) // prints false
console.log(0 === false) // prints false
console.log(1 === false) // prints false 
console.log(0 === true) // prints false

console.log(0 === 0) // prints true
console.log(1 === 1) // prints true
