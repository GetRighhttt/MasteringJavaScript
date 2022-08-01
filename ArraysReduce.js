/**
 * Reduce method is used to take a value, and return a single value in the array.
 * 
 * It basically reduces all the elements in an array to a single value.
 * 
 * This is ofen used a lot as well.
 * 
 * We will demonstrate this below.
 */

const newArray = [2, 34, 67, 98]
console.log("This is the array before the reduce method: ")
console.log(newArray)

// now we wil show how the reduce method works.
// we are going to add all the numbers together: 
console.log("This is the array after the reduce method: ")
const newResult = newArray.reduce((start, finish) => start + finish)
console.log(newResult)

console.log("---------------------------------------------")
console.log("This is the array before the reduce method: ")
console.log(newArray)

/**
 * I will use reduce for the array.
 */
console.log("This is the array after the reduce method: ")
const newValue = newArray.reduce((start, finish) => {
    return (start * finish) / 10
})
console.log(newValue)

/**
 * Outputs: 
 * 
 * This is the array before the reduce method: 
[ 2, 34, 67, 98 ]
This is the array after the reduce method: 
201
---------------------------------------------
This is the array before the reduce method: 
[ 2, 34, 67, 98 ]
This is the array after the reduce method: 
446.48799999999994


 */