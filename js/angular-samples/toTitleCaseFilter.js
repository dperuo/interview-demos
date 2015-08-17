/**
 * Converts a lowercase string into Title Case.
 *
 * @param {string} text - The string to convert.
 *
 * @returns {string} _newString - The newly converted string.
 */

app.filter('toTitleCaseFilter', function() {
  return function(text) {

    var _oldString    = text || '';
    var _oldTextArray = _oldString.split(' ');
    var _newTextArray = [];
    var _newString    = '';

    if (_oldString === 'N/A') {
      // If the text is 'N/A', return the text...
      _newString = _oldString;
    } else {
      // Otherwise, convert the text to title case.
      _oldTextArray.forEach(function(value, index, array) {
        var _word = [value.charAt(0).toUpperCase(), value.substr(1).toLowerCase()].join('');
        _newTextArray.push(_word);
      });

      _newString = _newTextArray.join(' ');

    }

    return _newString;
  };
});
