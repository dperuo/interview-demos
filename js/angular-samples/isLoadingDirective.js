/**
 * loads a GIF or SVG loading graphic based on browser feature detection
 */

app.directive('isLoadingDirective', function() {
  'use strict';

  var gifTemplate = [
    '<div ng-show="isLoading" class="loader">',
      '<img src="loader.gif">',
    '</div>'
  ].join('');

  var svgTemplate = [
    '<div ng-show="isLoading" class="loader">',
      '<img src="loader.svg">',
    '</div>'
  ].join('');

  return {
    restrict: 'A',
    replace: true,
    template: (hasSVGAnimation()) ? svgTemplate : gifTemplate
  };

  function hasSVGAnimation() {
    // Crude feature detection a la <github.com/Modernizr/Modernizr/blob/master/feature-detects/svg/smil.js>
    return !!document.createElementNS && /SVGAnimate/.test(document.createElementNS('http://www.w3.org/2000/svg', 'animate'));
  }
});
