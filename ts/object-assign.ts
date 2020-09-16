/**
* Object Assignmnt
*/


const obj1 = {
  name: "Jill",
  fn: function (arg1, arg2) {
    return [this.name, 'says', arg1, 'and', arg2].join(' ');
  }
};

console.log(obj1.fn('pow', 'zap!'));
// => Jill says pow and zap!

// assign obj2 using obj1's properties
const obj2 = Object.assign({ extra: 'properties' }, obj1);

console.log(obj2.fn('bam', 'baff!'));
// => Jill says bam and baff!

console.log(obj2.extra)
// => properties

})();
