/**
 * Converts seasons (eg. 2013-14) as a single year (2014)
 *
 * @param {array} season = An array of objects containing seasons.
 */

app.filter('yearFilter', function() {
  return function(season) {
    if (season) {
      var val = parseInt(season.substr(0, 4), 10) + 1;
      return (isNaN(val)) ? season : val;
    }
  };
});
