/**
 * Try-Catch Blocks
 *
 * A Try-Catch statement marks a block of statements to execute
 * and specifies a response should an exception be thrown.
 *
 * The try block executes as writen if no exception is thrown.
 */

const array = [1, 2, 3, 0, 4, 5]

try {
 if (notDefined) {
   const result = true
 }
} catch (e) {
  throw Error(e)
}

// => Uncaught Error: ReferenceError: notAnArray is not defined

try {
 if (array) {
   const bool = true
 }
} catch (e) {
  throw Error(e)
}

// => bool = true
