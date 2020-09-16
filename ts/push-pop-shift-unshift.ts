/**
 * Push, Pop, Shift and Unshift
 * Add and subtract data from the ends of arrays.
 */

var array = [1, 2, 3, 0, 4, 5]

/**
 * Array.prototype.push(data[, data, data, ...])
 *
 * Add data to the end of an array.
 * This action is distructive; the original array is changed.
 */

array.push(6)

// => [1, 2, 3, 0, 4, 5, 6]

/**
 * Array.prototype.pop()
 *
 * Get data from the the end of an array.
 * This action is distructive; the original array is changed.
 */

array.pop()

// => 6

/**
 * Array.prototype.shift()
 *
 * Get data from the start of an array.
 * This action is distructive; the original array is changed.
 */

array.shift()

// => 1

/**
 * Array.prototype.unshift(data[, data, data, ...])
 *
 * Add data to the start on an array.
 * This action is distructive; the original array is changed.
 */

array.unshift(8)

// => [8, 2, 3, 0, 4, 5]
