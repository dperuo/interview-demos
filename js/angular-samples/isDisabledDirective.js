/**
 * disables links and adds 'Coming Soon' message on hover.
 */

app.directive('isDisabledDirective', [

  function() {
    'use strict';

    return {
      restrict: 'A',
      link: function link(scope, iElement, iAttr) {

        iElement.css({
          'pointerEvents': 'none',
          'opacity': '0.25'
        });

        if (iAttr.$attr.statsHasTeaser) {

          var originalText = iElement.text();

          iElement.css({
            'pointerEvents': 'auto',
            'cursor':'default'
          });

          iElement.attr('href', '');

          iElement.hover(
            function() {
              iElement.text('Coming Soon');
            },
            function() {
              iElement.text(originalText);
            }
          );
        }
      }
    };
  }
]);
