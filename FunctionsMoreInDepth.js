/**
 * Here we will go over functions more in depth in JavaScript.
 * 
 * Function = a set of statements that can perform a task.
 * 
 * Parameters are what a function accepts.
 */

// basic function with one parameter
function getNames(names) {
    console.log(names) // pass parameter into the function.
}

getNames("Stefan") // prints names
console.log("----------------------------")

/**
 * Below we will show how we should typically declare functions in JavaScript.
 */

// We can also return objects with functions in JavaScript
// this is how we call a function with no reassignment
const returnObject = function(names) {
    return {
        names: names,
        website: `www.${names}.com`,
        anotherOne: `${names}` + "@github.com"
    }
}

// prints out the object stored in thisObject from the function returnObject
const thisObject = returnObject("Stefan")
console.log(thisObject)

console.log("-------------------------------")

const isTrue = function(a) {
    if(a == 'F') {
        console.log("Is a female.")
    }
    else if(a == 'M') {
        console.log("Is a male.")
    } 
    else {
        console.log("We don't know what it is!")
    }
}

isTrue('w') // prints we dont know what it is.
console.log("-------------------------------")


/**
 * There is also a way for us to declare functions without using the name 
 * functions.
 * 
 * It's called arrow functions using '=>'. Kind of like lambda syntax for Kotlin.
 */

// example of arrow functions.
console.log("Using arrow functions to print this object: ")
const newObject = (names) => {
    return {
        names: names,
        website: `www.${names}.com`,
        anotherOne: `${names}` + "@github.com"
    }
}

const myObject = newObject("Stefan")
console.log(myObject)


// when you only have one parameter, you can do it like this:
const finalObject = names => (
    {
        names: names,
        website: `www.${names}.com`,
        anotherOne: `${names}` + "@github.com"
    }
)

// A function to add numbers together
// when not returning an object, or no business logic, no need for brackets.
// when working with more than one parameter, need parenthesis
const addNumbers = (a, b) => a + b
console.log(addNumbers(3, 4)) // prints 7

const calculate = (a, b, sign) => {
    // business logic
    switch(sign) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            console.log("Not working properly...")
    }
}
console.log(calculate(5, 10, '*')) // prints 50
console.log(calculate(3, 20, '+')) // prints 23
console.log(calculate(10, 100, '-')) // prints -90

/**
 * There is also something called Default parameters.
 * 
 * Basically if nothing is passed to a function, the defaulted value is passed.
 * 
 * Also, the datatype of the parameter can be any type that you want, including
 * an object.
 */

// when you only have one parameter, you can do it like this with a default
// parameter: 
const wowObject = (names = "Stefan") => (
    {
        names: names,
        website: `www.${names}.com`,
        anotherOne: `${names}` + "@github.com"
    }
)
const thisName = wowObject()
console.log(thisName) // prints object with Stefan

const thatName = wowObject("BestBuy")
console.log(thatName) // prints object with BestBuy