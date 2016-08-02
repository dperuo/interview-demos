/**
 * adds tab navigation to a webpage
 */

(function(undefined) {
  'use strict';

  app.directive('tabNavDirective', tabNav);

  tabNav.$inject = ['$filter', 'TAB_DEFINITIONS', 'LinksFactory'];

  function tabNav($filter, TAB_DEFINITIONS, LinksFactory) {
    return {
      restrict: 'E',
      replace: false,
      controller: tabNavCtrl,
      link: tabNavLink,
      template: [
        '<div class="tabs eleven" ng-cloak>',
          '<div class="hidden-sm hidden-xs wrap-tabs">',
            '<div ng-repeat="tab in props.tabListArray" class="tab">',
              '<a href="#">{{::tab.value.shortHeading}}</a>',
            '</div>',
          '</div>',
          '<div class="visible-sm visible-xs wrap-select">',
            '<select name="section-links" ng-model="selected" ng-change="onNavChange();" ng-options="value.heading for (key, value) in tabListObj">',
              '<option value="">Select a Play Type</option>',
            '</select>',
          '</div>',
        '</div>'
      ].join('')
    };

    function tabNavLink(scope, elem, attr, ctrl) {

      var _locationSearchObj = LinksFactory.getSearchURL();
      var _hasSearchURL      = LinksFactory.hasSearchURL();

      scope.props = scope.props || {};
      scope.state = scope.state || {};

      scope.state.currentOD = (_locationSearchObj.OD) ? _locationSearchObj.OD : 'offensive';
      scope.state.currentPT = (_locationSearchObj.PT) ? _locationSearchObj.PT : 'player';

      scope.props.tabListArray = $filter('toArray')(TAB_DEFINITIONS.playtype);
    }
  }

  function tabNavCtrl() {
    // body...
  }
})();

