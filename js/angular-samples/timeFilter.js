/**
 * Converts decimal time into MM:SS
 *
 * @param {Number} time - The time to convert.
 *
 * @returns {string} - The newly converted time.
 */

app.filter('timeFilter', function() {
  return function(time) {

    var q1max = 7200;
    var q2max = 14400;
    var q3max = 21600;
    var q4max = 28800;

    var OTperiod = 0;
    var overtime = 0;
    var prefix = '';
    var remaining = 0;

    if (time <= q1max) {
      prefix = 'Q1';
      remaining = q1max - time;
    }

    if (time > q1max && time <= q2max) {
      prefix = 'Q2';
      remaining = (q1max - time) + q1max;
    }

    if (time > q2max && time <= q3max) {
      prefix = 'Q3';
      remaining = (q1max - time) + q2max;
    }

    if (time > q3max && time <= q4max) {
      prefix = 'Q4';
      remaining = (q1max - time) + q3max;
    }

    if (time > q4max) {
      // Grab total overtime...
      overtime = time - q4max;

      // Divide into 5-min periods
      OTperiod = Math.ceil(overtime / 3000);

      // Set the remaining time for the period
      remaining = ((3000 * OTperiod) - time) + q4max;

      // Add the OT period to the prefix
      prefix = 'OT' + OTperiod;
    }

    totalSecs = remaining / 10;

    displayMins = ('0' + Math.floor(totalSecs / 60)).substr(-2);
    displaySecs = ('0' + Math.floor(totalSecs % 60)).substr(-2);

    displayTime = [displayMins, displaySecs].join(':');

    return [prefix, displayTime].join(' - ');
  };
});
