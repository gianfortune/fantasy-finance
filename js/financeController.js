angular.module('financeApp', ['chart.js'])
  .controller('financeController', function($interval) {
    var parent = this;

    parent.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

  });
