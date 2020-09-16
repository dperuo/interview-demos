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
 if (window.) {
   const result = true
   console.log(result);
 }
} catch (e) {
  throw Error(e)
}

// => Uncaught Error: ReferenceError: notDefined is not defined

try {
 if (array) {
   const result = true
 }
} catch (e) {
  throw Error(e)
}

// => result = true
