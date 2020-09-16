/**
 * Call, Apply and Bind change the context for `this` and
 * partially apply arguments to a function.
 */

const myFancyObj = {
  name: 'Jill',
  fn: function(arg1, arg2) {
    return [this.name, 'says', arg1, 'and', arg2].join(' ');
  }
};

const daveObj = {
  name: "Dave"
};

const stewObj = {
  name: "Stew"
};

const marthaObj = {
  name: 'Martha'
};

/**
 * Execute a function normally
 */

myFancyObj.fn('pow', 'zap!');

// => Jill says pow and zap!

/**
 * Function.prototype.call()
 *
 * Execute a function with a different context for `this`.
 * Properties are passed as individual arguments.
 */

myFancyObj.fn.call(daveObj, 'bam', 'baff!');

// => Dave says bam and baff!

/**
 * Function.prototype.apply()
 *
 * Execute a function with a different context for `this`.
 * Properties are passed as an array.
 */

myFancyObj.fn.apply(stewObj, ['spiff', 'zing!']);

// => Stew says spiff and zing!

/**
 * Function.prototype.bind()
 *
 * Define a new function with a different context for `this`.
 * Execute the new function someplace else.
 * Properties are passed as individual arguments.
 */

const boundObj = myFancyObj.fn.bind(marthaObj, 'ping');

boundObj('baff!');

// => Martha says ping and baff!
