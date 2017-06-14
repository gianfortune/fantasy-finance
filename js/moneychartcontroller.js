function moneyChartController ($interval) {
  var ctrl = this

  ctrl.height_chart = window.innerHeight * 0.7
  ctrl.paused = false
  ctrl.collapsed = false
  ctrl.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }]

  // Sets the options for the charts
  ctrl.options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    hover: {
      mode: 'nearest',
      intersect: true
    },
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
  }

  // Calls the updateGraphData function on an interval, checking for new information
  $interval(function () {
    if (!ctrl.paused) {
      ctrl.updateGraphData()
    }
  }, 2000)

  // Sets graph state for paused (BOOLEAN)
  ctrl.pauseGraph = function () {
    ctrl.paused = !ctrl.paused
  }

  // Sets graph state for paused (BOOLEAN) and collapsed (BOOLEAN)
  ctrl.collapseGraph = function () {
    ctrl.paused = !ctrl.paused
    ctrl.collapsed = !ctrl.collapsed
    console.log(ctrl.collapsed)
  }

  // Updates the graph data with new numbers
  ctrl.updateGraphData = function () {
    ctrl.currencyObject.data.forEach(function (row) {
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
})
