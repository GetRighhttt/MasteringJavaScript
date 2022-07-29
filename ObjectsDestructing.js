/**
 * Objects Destructing
 * 
 * Learning how to pull multiple values from an object with one line of code:
 * 
 * It's known as a "spread".
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

/**
 * Here is an example of how a spread works.
 * 
 * This is going to print all the values that we have declared in the brackets.
 */


// const firstName = person.firstName
// const isMale = person.isMale
// const isFine = person.isFine

// this is the same as doing the 3 statements above: 
const { firstName, isMale, isFine } = person

console.log(firstName)
console.log(isMale)
console.log(isFine)

console.log("--------------------------")

// here is how we get nested values in an object
// rename zipcode to postcode 
const {
    address : { zicode: postcode, city }
} = person
console.log(postcode + " " + city)
console.log("--------------------------")


/**
 * We can also combine objects:
 */
 const newPerson = {
    finalFirstName: "Billy",
    finalLastName: "Bob",
    isCountry: true
 }

 // this is how we combine objects together with person and newPerson
 const combinedObjects = {
    newPerson : { 
        finalFirstName: newPerson.finalFirstName, 
        finalLastName: newPerson.finalLastName 
    }, 
     person : { 
        firstName: person.firstName, 
        isMale: person.isMale 
    }
 }

console.log("--------------------------")
console.log("This is the first names of both of the objects: ")
 // this should print out both first name of each of the objects
console.log(combinedObjects.newPerson.finalFirstName + " " 
 + combinedObjects.person.firstName)

 /**
  * There is also another way to do this with "..." notation.
  * 
  * This will grab all the values in both of these objects.
  */

 const thisIsTheLastObject = {
    person: { ...person}, // isolates the person object
    ...newPerson
 }
console.log("--------------------------")
console.log("This will print all the entries in both of the objects: ")
console.log(thisIsTheLastObject)

 /**
  * Output:
  * 
  * This will print all the entries in both of the objects: 
{
  person: {
    firstName: 'Stefan',
    age: 27,
    isMale: true,
    isFine: true,
    address: { city: 'Tampa', state: 'Florida', zicode: '33544' },
    toString: [Function: toString]
  },
  finalFirstName: 'Billy',
  finalLastName: 'Bob',
  isCountry: true
}
*/
