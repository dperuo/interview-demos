/**
 * Global utilities used throughout the project
 */

app.factory('UtilityFactory', [

  function UtilityFactory() {
    'use strict';

    /**
     * isTypeFn()
     * Tests if a variable is of a specific type.
     * toddmotto.com/understanding-javascript-types-and-reliable-type-checking
     *
     * @param {String} type - The type to check against. Must be in Title Case format.
     * @param {*} item - the variable to test.
     *
     * @return {Boolean} - True if item equals type.
     */

    function isTypeFn(type, item) {
      return (Object.prototype.toString.call(item).slice(8, -1) === type);
    }

    return {
      isType: isTypeFn
    };
  }]);
