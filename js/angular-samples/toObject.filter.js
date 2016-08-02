/**
 * Turns an array into an object.
 *
 * @param {Array} array - The array to convert. Must be in '[<key>, <value>]' format
 *
 * @returns {Object} object - The newly converted array.
 */

app.filter('toObjectFilter', function() {
  return function(array) {
    var object = {};

    object[array[0]] = array[1];

    return object;
  };
});

