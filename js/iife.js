/**
 * Immediately-Invoked Function Expression
 *
 * A JavaScript function executed as soon as it's defined.
 * This is a great way to preven code from entering the global scope.
 */
(function (document, window, undefined) {
    // avoid silent errors and boost performance a little.
    'use strict';
    // pass undefined as the final argument to guarantee it's undefined-ness.
    if (undefined) {
        return 'Houston, we have a problem.';
    }
    // pass in any globals you might need
})(document, window);
