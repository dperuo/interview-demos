/**
 * `this` references the current scope. There are four contexts.
 */

/**
 * 1. Global Context
 *
 * When executed outside a function,`this` refers to the global object.
 * The global object is returned whether in strict mode or not.
 */

console.log(this);
// => global object

/**
 * 2. Function Context
 *
 * Inside a function, the value of `this` depends on how the function is called.
 */

 // outside Strict Mode, `this` defaults to the global object.
function loose() {
  return this;
}

loose();
// => global object

// inside Strict Mode, `this` defaults to undefined unless assigned elsewhere.
function strict() {
  'use strict';
  return this;
}

strict();
// => undefined

/**
 * 3. Object Context
 *
 * `this` sets to the object the method is called on, or the method itself.
 */

// object reference
const obj1 = {
  foo: 42,
  fn: function () {
   return this.foo;
 }
};

obj1.fn();
// => 42

// method reference
const obj2 = {
  foo: 42,
  fn: () => { this.foo }
};

obj2.fn();
// => undefined

/**
 * 4. Constructor Context
 *
 * `this` is bound to the new object being constructed.
 */

class Constructor {
  foo = 42;

  fn () {
    return this.foo;
  };
}

const bar = new Constructor();

bar.fn();
// => 42
