/**
 * Map, forEach, Reduce and Filter manipulate array data.
 */

var smallNumbers = [1, 1, 2, 3, 5, 8];

/**
 * Array.prototype.map()
 *
 * Execute a function once on every element in an array.
 * Creates a new array from the results.
 */

var squares = smallNumbers.map(function(value, index, array) {
  return Math.pow(value, 2);
});

// => [1, 1, 4, 9, 25, 64]

/**
 * Array.prototype.forEach()
 *
 * Execute a function once on every element in an array.
 * Does NOT create a new array.
 */

var cubes = [];

smallNumbers.forEach(function(value, index, array) {
  cubes.push(Math.pow(value, 3));
});

// => [1, 1, 8, 27, 125, 512]

/**
 * Array.prototype.reduce()
 *
 * Execute a function once on the accumulated values in an array.
 * Returns a single result.
 */

var fibonacci = smallNumbers.reduce(function(result, value, index, array) {
  return parseInt(String.prototype.concat.call(result, value), 10);
});

//=> 112358

/**
 * Array.prototype.filter()
 *
 * Execute a function once on every element in an array.
 * Creates a new array from results that return true.
 */

var even = smallNumbers.filter(function(value, index, array) {
  return (value % 2 === 0);
});

//=> [2, 8]
