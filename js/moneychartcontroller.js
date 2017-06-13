function moneyChartController($interval) {
  var ctrl = this;

  ctrl.height_chart = window.innerHeight*0.7;
  ctrl.paused = false;
  ctrl.collapsed = false;
  ctrl.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  ctrl.options = {
    responsive: true,
    maintainAspectRatio: false,
    animation : false,
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

  $interval( function(){
    if (!ctrl.paused) {
      ctrl.updateGraphData();
    }
  }, 2000)

  ctrl.pauseGraph = function () {
    ctrl.paused = !ctrl.paused
  }

  ctrl.collapseGraph = function () {
    ctrl.paused = !ctrl.paused
    ctrl.collapsed = !ctrl.collapsed
    console.log(ctrl.collapsed)
  }

  ctrl.updateGraphData = function () {
    ctrl.currencyObject.data.forEach(function(row){
      var newData = Math.floor((Math.random() * 100) + 1)
      row.push(newData)
      row.shift()
    })
    ctrl.currencyObject.labels.push(ctrl.currencyObject.labels[0])
    ctrl.currencyObject.labels.shift()
  }
}


angular.module('financeApp').component('moneyChart', {
  templateUrl: 'html/moneyChart.html',
  controller: moneyChartController,
  bindings: {
    currencyObject: '<'
  }
});
