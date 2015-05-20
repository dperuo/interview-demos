/**
 * Every and Some test array data against an expression.
 */

var bools = [true, true, true, true, false];

/**
 * Array.prototype.every()
 *
 * Checks if all elements in an array pass the test.
 * Returns true or false;
 */

bools.every(function(value, index, array) {
  return value;
});

// => false

/**
 * Array.prototype.some()
 *
 * Checks if any elements in an array pass the test.
 * Returns true or false;
 */

bools.some(function(value, index, array) {
  return value;
});

// => true
