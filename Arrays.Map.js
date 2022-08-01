/**
 * Learning how to use .map() with an array.
 * 
 * The .map() method allows you to perform transformations on the loop itself.
 * 
 * It is well known across many languages, and is used quite often.
 * 
 * the map() method creates a new array by calling a specific function on 
 * each element present in the array.
 * 
 * map() is used to map functions to values in an array easily. 
 */

// We will show how to take an array of numbers, and add 3 to them.
const numbers = [1, 2, 3, 4, 5, 6]
const numbersAddThree = numbers.map(number => {
    return number + 3
})
console.log("This is the array before using map(): ")
console.log(numbers)

console.log("This is the array after using the map() method: ")
console.log(numbersAddThree)
console.log("--------------------------------")

// another way of calling the map function.
console.log("This is the array before multiplying values by 3: ")
console.log(numbers)
console.log("This is the array after multiplying by 3: ")
const newArrayTimesThree = numbers.map(n => n * 3)
console.log(newArrayTimesThree)