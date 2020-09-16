/**
 * Converts feet and inches into total inches.
 *
 * @param {string} size - The number to convert.
 *
 * @returns {string} totalInches - The newly converted number.
 */

app.filter('toInchesFilter', function() {
  return function(size) {

    var _sizeArray = filterArray(toArray(size));

    var _feet = (parseInt(_sizeArray[0], 10) * 12);
    var _inches = (_sizeArray[1]) ? parseInt(_sizeArray[1], 10) : 0;

    var totalInches = (_feet + _inches).toString();

    // return null if totoalInches is not a number
    return (isNaN(totalInches)) ? null : totalInches;

    /**
     * toArray()
     *
     * Converts a string to an array using non-digit characters as seperators
     *
     * @params {string} string - The string to split
     * @returns {Array} - The array
     */

    function toArray(string) {
      return string.split(/\D/);
    }

    /**
     * filterArray()
     *
     * Removes empty, null, and undefined indexes from an array.
     *
     * @params {Array} oldArray - The array to filter
     * @returns {Array} - The filtered array
     */

    function filterArray(oldArray) {
      return oldArray.filter(function(value, index, array) {
        if (value !== '' || value !== null || value !== undefined) {
          return value;
        }
      });
    }
  };
});
