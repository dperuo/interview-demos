/**
 * Map, forEach, Reduce and Filter manipulate array data.
 */

const smallNumbers = [1, 1, 2, 3, 5, 8];

/**
 * Array.prototype.map()
 *
 * Execute a function once on every element in an array.
 * Creates a new array from the results.
 */

const squares = smallNumbers.map((value, index, array) => Math.pow(value, 2))

// => [1, 1, 4, 9, 25, 64]

/**
 * Array.prototype.forEach()
 *
 * Execute a function once on every element in an array.
 * Does NOT create a new array.
 */

const cubes = [];

smallNumbers.forEach((value, index, array) => cubes.push(Math.pow(value, 3)))


// => [1, 1, 8, 27, 125, 512]

/**
 * Array.prototype.reduce()
 *
 * Execute a function once on the accumulated values in an array.
 * Returns a single result.
 */

const fibonacci = smallNumbers.reduce((result, value, index, array) => {
  return parseInt(String.prototype.concat.call(result, value), 10);
});

//=> 112358

/**
 * Array.prototype.filter()
 *
 * Execute a function once on every element in an array.
 * Creates a new array from results that return true.
 */

const even = smallNumbers.filter((value, index, array) => value % 2 === 0)


//=> [2, 8]
