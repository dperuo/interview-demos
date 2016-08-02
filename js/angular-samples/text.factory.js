/**
 * converts text from one format to another
 */

app.factory('TextFactory', ConvertTextFactory);

function ConvertTextFactory() {

  var _convertText = {};

  /**
   * toPascalCase()
   * Converts a string with spaces into PascalCase.
   *
   * @param {string} text - The string to convert.
   *
   * @returns {string} _newString - The newly converted string.
   */

  _convertText.toPascalCase = function toPascalCase(text) {

    var _oldString    = text || '';
    var _oldTextArray = _oldString.split(' ');
    var _newTextArray = [];
    var _newString    = '';

    _oldTextArray.forEach(function(value, index, array) {
          var _word = [value.charAt(0).toUpperCase(), value.substr(1).toLowerCase()].join('');
          _newTextArray.push(_word);
        });

    _newString = _newTextArray.join('');

    return _newString;
  };

  return _convertText;
}
