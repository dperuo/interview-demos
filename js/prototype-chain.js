/**
 * Prototypes, the prototype chain, and inheritance
 *
 * JavaScript is a dynamic programming language and does not have an official
 * class implementation. The `class` keyword introduced in ES6 is nothing more
 * than syntactical sugar and ES6 remains prototype-based.
 *
 * JavaScript has only objects. Each object links to a parent object called a
 * prototype. That prototype has its own prototype. This chain of prototypes
 * stretches all the way up until a null object is reached. Null by definition
 * has no prototype and acts as the final link the chain.
 *
 * Object always inherit the properties and methods of their prototypes. This
 * means objects can share properties and methods across multiple instances
 * without using large amounts of memory or resources.
 */

function Enterprise() {
  this.crew = {
    captain: "picard",
    doctor: "crusher",
    number1: "riker"
  }
}

/**
 * When accessing object properties, the object and its prototypes will all be
 * searched until the end of the chain is reached...
 */

const nextGen = new Enterprise();

nextGen.getCaptain();
// => Uncaught TypeError: nextGen.getCaptain is not a function

/**
 * ...or a match is found.
 */

Enterprise.prototype.getCaptain = function() {
  return this.crew.captain;
}

nextGen.getCaptain();
// => "picard"

/**
 * Traversing a long prototype chain have negative impact on performance.
 * Accessing nonexistent properties will always traverse the full chain.
 */
