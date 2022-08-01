/**
 * We can also destruct arrays the same way we did with objects.
 */

const newNames = ["Stefan", "Bayne", "Name", "Jimmy", "Falon"]

// we can call values in the array the same way we did with objects,
// and we can use the spread operator to print out the rest of the list as well.
const [s, b, ...rest] = newNames
console.log(s.split("") + " " + b.toUpperCase() + " " + rest.reverse())

/**
 * output: 
 * spllits stefan into chars and we reversed the rest of the list.
S,t,e,f,a,n BAYNE Falon,Jimmy,Name
 */