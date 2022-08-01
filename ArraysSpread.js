/**
 * We can use the spread notation to combine arrays together.
 * 
 * And we can also use spread combined with other functions to produce an output.
 */

const arrayA = [2, 3, 4, 5]
const arrayB = [10, 7, 0, 3, 7]
const combinedArrays = [...arrayA, ...arrayB]
console.log(combinedArrays)
/**
 * [
  2, 3, 4, 5, 10,
  7, 0, 3, 7
]
 */

const multiplyNumbers = (n, m, b, a) => n * m * b * a
console.log(multiplyNumbers(...arrayA))

/*
outputs: 120

combines all the nubmers in the first array using spread
*/

console.log(multiplyNumbers(...arrayB)) // outputs 0