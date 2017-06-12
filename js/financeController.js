angular.module('financeApp', ['chart.js'])
  .controller('financeController', function($interval) {
    var parent = this;
    parent.dataCurrencies = [{
      fantasyMoney: 'Galactic Standard Credits',
      fantasyType: "Star Wars",
      data: [],
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      series: ['GSC', 'USD']
    }, {
      fantasyMoney: 'Munny',
      fantasyType: "Kingdom Hearts",
      data: [],
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
      series: ['MU', 'USD']
    }]

    parent.$onInit = function() {
       parent.fetchData();
     };

     parent.fetchData = function () {
       parent.dataCurrencies.forEach(function (currencyInfo) {
         for(var i = 0; i < currencyInfo.series.length; i++) {
           var newData = parent.makeRandom100(currencyInfo.labels.length);
           currencyInfo.data.push(newData)
         }
       })
     }

     parent.makeRandom100 = function (length) {
       let dataArray = [];
       for(var i = 0; i < length; i++) {
         let newData = Math.floor((Math.random() * 100) + 1);
         dataArray.push(newData)
       }
       return dataArray
     }

  });
