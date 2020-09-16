/**
 * sets and gets URL query strings
 */

app.factory('LinksFactory', [
  '$location',

  function LinksFactory($location) {
    'use strict';

    var _LinksFactory = {};

    /**
     * getSearchURL()
     * @returns {object} [filter] - The $location query string.
     *                              Returns the entire query string
     *                              When called without arguments.
     */

    _LinksFactory.getSearchURL = function returnSearchObj(filter) {
      return (filter) ? $location.search()[filter] : $location.search();
    };

    /**
     * setSearchURL()
     * @param {object} obj - An object of search keys and values. Keys are strings.
     */

    _LinksFactory.setSearchURL = function setSearchURL(obj) {
      var _obj = obj || {};
      for (var key in _obj) {
        $location.search(key, _obj[key]);
      }
    };

    /**
     * resetSearchURL()
     * @param {array} [array] - An array of search keys. Keys are strings.
     *                          Removes the entire query string
     *                          when called without arguments.
     */

    _LinksFactory.resetSearchURL = function resetSearchURL(array) {
      var _array = array || Object.keys($location.search());
      var _len = _array.length;
      for (var i = 0; i < _len; i++) {
        $location.search(_array[i], null);
      }
    };

    /**
     * hasSearchURL()
     * @returns {boolean} - True if a query string is detected.
     */

    _LinksFactory.hasSearchURL = function hasSearchURL() {
      var _length = Object.keys($location.search()).length;
      return (_length > 0) ? true : false;
    };

    /**
     * getHashURL()
     * @returns {string} - The hash fragment of the URL without the hash symbol.
     */

    _LinksFactory.getHashURL = function getHashURL() {
      return $location.hash();
    };

    /**
     * setHashURL()
     * @param {string} string - An object of search keys and values. Keys are strings.
     */

    _LinksFactory.setHashURL = function setHashURL(string) {
      $location.hash(string);
    };

    /**
     * resetHashURL()
     * @param {none} - Removes the hash fragment. It's called without parameters.
     */

    _LinksFactory.resetHashURL = function resetHashURL() {
      $location.hash(null);
    };

    /**
     * getFullURL()
     * @returns {string} - The full URL.
     */

    _LinksFactory.getFullURL = function getFullURL() {
      return $location.absUrl();
    };

    return _LinksFactory;
  }
]);
