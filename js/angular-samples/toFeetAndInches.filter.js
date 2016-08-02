/**
 * Converts total inches into feet and inches.
 *
 * @param {number} inches - The number to convert.
 *
 * @returns {string} _feetInches - The newly converted number.
 */

app.filter('toFeetAndInchesFilter', function() {
  return function(measure) {

    // measure must be a number
    var _measure = parseInt(measure, 10);

    var _feet = Math.floor(_measure / 12);
    var _inches = (_measure % 12);

    return [_feet, _inches].join('-');
  };
});
