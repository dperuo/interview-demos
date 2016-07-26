/**
 * Slice and Splice
 * Add and subtract data from any place in an array.
 */

var array = [1, 2, 3, 0, 4, 5]

/**
 * Array.prototype.slice(startIndex[, endIndex])
 *
 * Returns a new array containing the requested start and end indexes.
 * This action is non-distructive; the original array is unchanged.
 */

var sliceArray = array.slice(2,4)

// array => [1, 2, 3, 0, 4, 5]
// sliceArray => [3, 0]

/**
 * Array.prototype.splice(startIndex[, deleteCount, newData, newData, ...])
 *
 * Returns a new array containing the requested start and end indexes.
 * This action is distructive; the original array is changed.
 */

var spliceArray = array.splice(2,4,10,11)

// array => [1, 2, 10, 11]
// spliceArray => [3, 0, 4, 5]
