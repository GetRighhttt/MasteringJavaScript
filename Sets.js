/**
 * Sets
 *
 * Sets are like mapss except they do not allow duplicates.
 *
 * Sets and maps share the same API, so they can use the some of the same methods.
 */

const numberSet = new Set();
numberSet.add(3).add(4).add(5);
console.log(numberSet);
/**
 * out[ut : Set(3) { 3, 4, 5 }
 */

console.log(numberSet.delete(3)); // true

for (const n of numberSet) {
  console.log(n);
}

/**
 * Now we will show how to convert an array to a set.
 * 
 * This is basically how we can remove duplicate values from an array.
 */
const myArray = [1, 2, 3, 3, 2, 1];
console.log(Array.from(new Set(myArray))); // [ 1, 2, 3 ] duplicates removed
