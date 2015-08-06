/**
 * `this` references the current scope
 */

/**
 * Global Context
 *
 * When executed outside a function,`this` refers to the global object.
 * The global object is returned whether in strict mode or not.
 */

console.log(this);
// => global object

/**
 * Function Context
 *
 * Inside a function, the value of `this` depends on how the function is called.
 */

function loose() {
  // outside Strict Mode, `this` defaults to the global object.
  return this;
}

loose();
// => global object

function strict() {
  // inside Strict Mode, `this` defaults to undefined unless assigned elsewhere.
  'use strict';
  return this;
}

strict();
// => undefined

/**
 * Object Context
 *
 * `this` sets to the object the method is called on.
 */

var obj = {
  foo: 42,
  fn: function() {
   return this.foo;
 }
};

console.log(obj.fn());
// => 42

/**
 * Constructor Context
 *
 * `this` is bound to the new object being constructed.
 */

function Constructor() {
   this.foo = 42;
   this.fn = function() {
    return this.foo;
  };
}

var bar = new Constructor();

console.log(bar.fn());
// => 42
