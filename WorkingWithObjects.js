/**
 * Here we examine objects a little more.
 * 
 * Objects are a collection of key-value pairs.
 * 
 * We use 'this' keyword to refer to the object that we are currently working with
 * when implementing different functions.
 */

const person = {
    firstName: "Stefan",
    age: 27,
    isMale: true,
    isFine: true,
    address: {
        city: "Tampa",
        state: "Florida",
        zicode: "33544"
    },
    // we can also have functions within objects: 
    toString: function() {
        return `Name: ${this.firstName} + " " + Age: ${this.age}`
    }
}

// function call for the person object that prints the function toString()
console.log(person.toString())

// we can also add new key-values to an object
person.lastName = "Bayne"
console.log(person.firstName + " " + person.lastName)

// we can also add values this way
person["newName"] = "NewName"

console.log("This is the list before we delete isFine: ")
console.log(person)

// we can also delete values
delete person.isFine

// prints the entire list
console.log("This is the list after we delete isFine: ")
console.log(person)

// this is how we iterate through the list
// this prints the keys and the values
console.log("Now we will show how to iterate through the list: ")
for(const p in person) {
    console.log(p + " " + person[p])
}

console.log(Object.keys(person)) // returns an array of the keys
console.log(Object.values(person)) // returns an array of the values