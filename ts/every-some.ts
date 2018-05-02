/**
 * Every and Some test array data against an expression.
 */

const bools = [true, true, true, true, false];

/**
 * Array.prototype.every()
 *
 * Checks if all elements in an array pass the test.
 * Returns true or false;
 */


bools.every((value, index, array) => value)

// => false

/**
 * Array.prototype.some()
 *
 * Checks if any elements in an array pass the test.
 * Returns true or false;
 */

bools.some((value, index, array) => value)

// => true
