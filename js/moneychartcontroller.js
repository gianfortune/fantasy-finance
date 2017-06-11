function moneyChartController($interval) {
  var ctrl = this;

  ctrl.labels = ["January", "February", "March", "April", "May", "June", "July"];
  ctrl.series = ['Munny', 'USD'];
  ctrl.height_chart = window.innerHeight*0.7;
  ctrl.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  ctrl.options = {
    responsive: true,
    maintainAspectRatio: false,
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

  $interval( function(){ ctrl.updateGraphData(); }, 2000)

  ctrl.updateGraphData = function () {
    console.log(ctrl)
    ctrl.data.forEach(function(row){
      var newData = Math.floor((Math.random() * 100) + 1)
      row.push(newData)
      row.shift()
    })
  }
}


angular.module('financeApp').component('moneyChart', {
  templateUrl: 'html/moneyChart.html',
  controller: moneyChartController,
  bindings: {
    data: '<'
  }
});
