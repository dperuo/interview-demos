/**
 * Objects and Arrays are copied in 2 ways: Shallowly and Deeply
 */

var myFancyObj = {
  name: 'Jill',
  array: [1, 2, 3, 0, 4, 5],
  obj: {
    string: 'foo',
    array: [1, 2, 3, 0, 4, 5]
  },
  fn: function(arg1, arg2) {
    return [this.name, 'says', arg1, 'and', arg2].join(' ');
  }
};

/**
 * In shallow copies, data types are referenced from one variable to another.
 *
 * References are shared and modifying values in one variable will
 * update values in the other.
 *
 * Shallow copies are simple and cheap. They are JavaScript's default behavior.
 */

var shallowObj = myFancyObj;

console.log(shallowObj === myFancyObj);

// ==> true

console.log(shallowObj.obj.string);

// ==> 'foo'

shallowObj.obj.string = 'bar';

console.log(myFancyObj.obj.string);

// ==> 'bar'

/**
 * In deep copies, data types are copied from one variable to another.
 *
 * Deeply copied variables are distinct and independent. Modifying values
 * in one variable does nothing in the other.
 *
 * Deep copies are expensive but nesessary if copied data is modified later.
 */


// heyjavascript.com/4-creative-ways-to-clone-objects/
var deepObj = JSON.parse(JSON.stringify(myFancyObj));

console.log(deepObj === myFancyObj);

// ==> false

console.log(deepObj.obj.string);

// ==> 'foo'

deepObj.obj.string = 'bar';

console.log(myFancyObj.obj.string);

// ==> 'foo'
