(function () {

  var obj1 = {
    name: "Jill",
    fn: function (arg1, arg2) {
      return [this.name, 'says', arg1, 'and', arg2].join(' ');
    }
  };

  console.log(obj1.fn('pow', 'zap!'));
  // => Jill says pow and zap!

  // creates obj2 using obj1's properties
  var obj2 = Object.create(obj1, {
  	// each new property must be declared using the same
  	// notation as the 2nd argument of Object.defineProperty()
    name: { value: "Dave", writable: true }
  });

  console.log(obj2.fn('bam', 'baff!'));
  // => Dave says bam and baff!

})();
