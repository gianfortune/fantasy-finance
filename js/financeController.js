angular.module('financeApp', ['chart.js', 'ngAnimate'])
  .controller('financeController', function ($interval) {
    var parent = this

    // Sets the data dependencies, in a real App this would be taken from the backend
    parent.dataCurrencies = [{
      fantasyMoney: 'Galactic Standard Credits',
      fantasyType: 'Star Wars',
      data: [],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      series: ['GSC', 'USD']
    }, {
      fantasyMoney: 'Munny',
      fantasyType: 'Kingdom Hearts',
      data: [],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      series: ['MU', 'USD']
    }]

    // Starts the app by calling fetchData()
    parent.$onInit = function () {
      parent.fetchData()
    }

    // Creates randomized data sets for the graphs to use
    parent.fetchData = function () {
      parent.dataCurrencies.forEach(function (currencyInfo) {
        for (var i = 0; i < currencyInfo.series.length; i++) {
          var newData = parent.makeRandom100(currencyInfo.labels.length)
          currencyInfo.data.push(newData)
        }
      })
    }

    // Creates a random data array from 1 to 100
    parent.makeRandom100 = function (length) {
      let dataArray = []
      for (var i = 0; i < length; i++) {
        let newData = Math.floor((Math.random() * 100) + 1)
        dataArray.push(newData)
      }
      return dataArray
    }
  })
