/**
 * A callback is like a higher-order function in Kotlin.
 * 
 * Callbacks are functions that are passed as an argument to another function
 * to control the execution of functions.
 * 
 * It's a function passed inside of a function to do more.
 * 
 * Callbacks are typically used when you want to execute a function 
 * asynchronously.
 */

// Here we wil demonstrate how to use a callback function
const addNumbers = (a, b, callback) => {
    console.log(a + b + callback(a, b)) // prints a + b then the callback
}

// we use arrow functions with callbacks to declare the call back function
addNumbers(4, 6, (a, b) => {
    return " The Callback Numbers are: " + a + " and " + b
}) // this should print "10 The Callback Numbers are: 4 and 6"

// we can also declare the callback in a variable
const cb = (a, b) => {
    return " This is the callback declared with numbers: " + a + " and " + b
}
// then when we make the function call, we pass in the const we created
addNumbers(5, 10, cb) // prints "15 This is the callback declared with numbers: 5 and 10"