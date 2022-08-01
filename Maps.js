/**
 * Maps allow us to store a key that can be any value, whereas objects
 * typically convert keys to strings.
 *
 * With maps, we can have ints, objecs, etc. stored as keys.
 */

const personMap = new Map();
personMap.set(1, "James");
personMap.set(2, "Harlem");
personMap.set(3, "Name");
personMap.set({age: 21, foot: "big"}, "Object")
console.log(personMap);
/**
 * Map(4) {
  1 => 'James',
  2 => 'Harlem',
  3 => 'Name',
  { age: 21, foot: 'big' } => 'Object'
}
 */

// could also add maps together using dot notation:
personMap.set(5, "funny").set(6, "lame").set(7, "loser")
console.log(personMap)
/**
 * Map(7) {
  1 => 'James',
  2 => 'Harlem',
  3 => 'Name',
  { age: 21, foot: 'big' } => 'Object',
  5 => 'funny',
  6 => 'lame',
  7 => 'loser'
}
 */

// below i will show how we can check if a key is present, and get a value in a key.
console.log(personMap.has(5)) // true
console.log(personMap.has(7)) // true
console.log(personMap.has(6)) // true
console.log(personMap.get(3)) // Name
console.log(personMap.get(2)) // Harlem

// we can also delete values in a map
console.log(personMap.delete(7))
console.log(personMap)
/**
 * Map(6) {
  1 => 'James',
  2 => 'Harlem',
  3 => 'Name',
  { age: 21, foot: 'big' } => 'Object',
  5 => 'funny',
  6 => 'lame'
}*/

/**
 * This is how we can loop through the map.
 * 
 * the for loop prints all the key-value pairs.
 * 
 * the fromEntries method returns the map as an object.
 */
for(let n of personMap) {
    console.log(n)
}

// or
console.log(Object.fromEntries(personMap.entries()))
/**
 * Map(6) {
  1 => 'James',
  2 => 'Harlem',
  3 => 'Name',
  { age: 21, foot: 'big' } => 'Object',
  5 => 'funny',
  6 => 'lame'
}

For loop:
[ 1, 'James' ]
[ 2, 'Harlem' ]
[ 3, 'Name' ]
[ { age: 21, foot: 'big' }, 'Object' ]
[ 5, 'funny' ]
[ 6, 'lame' ]

Object: 
{
  '1': 'James',
  '2': 'Harlem',
  '3': 'Name',
  '5': 'funny',
  '6': 'lame',
  '[object Object]': 'Object'
}*/

for(const v of personMap.values()) {
    console.log(v)
}

/**
 * Prints the values of the keys
 * 
 * James
Harlem
Name
Object
funny
lame
 */

// we can also use entries:
for(const entries of personMap.entries()) {
    console.log(entries)
}
/**
 * [ 1, 'James' ]
[ 2, 'Harlem' ]
[ 3, 'Name' ]
[ { age: 21, foot: 'big' }, 'Object' ]
[ 5, 'funny' ]
[ 6, 'lame' ]
 */