/**
 * gets data via $http request
 */

app.factory('DataFactory', [
  '$q',
  '$filter',
  '$http',
  'StatsRequest',

  function($q, $filter, $http, StatsRequest) {
    'use strict';

    function createUrl(params, category, section) {

      // data feed
      var _rootURL = '/path/to/data/feed';

      // Play Type category
      var _cat = category;

      // Team or Player
      var _isTeam = (section == 'team') ? 'team_' : 'player_';

      // Regular or Post Season
      var _isPost = (params.SeasonType == 'Playoffs') ? '_post' : '';

      // Filename string
      var _fileName = [_isTeam, _cat, _isPost].join('').concat('.js');

      // Full stats URL
      return [_rootURL, _fileName].join('/');
    }

    function getFn(params, category, section) {

      var deferred = $q.defer();
      var url = createUrl(params, category, section);

      $http({method: 'GET', url: url })
        .then(function(response) {
          var data = response.data;

          for (var i in data) {
            StatsRequest.parse(data[i]);
          }

          deferred.resolve(data);
        });

      return deferred.promise;
    }

    return {
      get: getFn
    };
  }

]);
