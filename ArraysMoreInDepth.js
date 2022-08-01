/**
 * Here we will examine built-in methods with Arrays in JS more in depth.
 * 
 * We will go over indexing, push, and slice methods.
 * 
 * Getting the index, adding and deleting. 
 */

const newArray = [1, 2, 3, 4, 5, 6, 7, 8]

// adds 10 to the back of the array
newArray.push(10)
console.log(newArray)

// forEach method to iterate through the array in a list
newArray.forEach(n => {
console.log(n)
})

/**
 * can also write it this way:
 * 
 * newArray.forEach(n => console.log(n))
 */

// This is how we can change a value in an array using indexing
newArray[5] = 9
console.log("This index of 5 is now: " + newArray[5])


/**
 * indexOf() is used to return the index of a value in the array.
 */
const indexOfFive = newArray.indexOf(5)
console.log(indexOfFive)

/**
 * Splice is used to delete values in an array. 
 * 
 * We are going to demonstrate this using indexOfFive.
 * 
 * We do so by stating the starting point as indexOfFive, and
 * then stating how many values we want to delete from the array.
 */
newArray.splice(indexOfFive, 3) // 3 means 3 numbers after the index of five.
console.log(newArray)

/**
 * This is the output:
 * 
 * [ 1, 2, 3, 4, 8, 10 ]
 */

newArray.splice(1, 4)
console.log(newArray)
/**
 * Output: 
 * 
 * [ 1, 10 ]
 */