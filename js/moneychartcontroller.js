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
      ctrl.callUpdateGraph()
    }
  }, 2000)

  // Sets graph state for paused (BOOLEAN)
  ctrl.pauseGraph = function () {
    ctrl.paused = !ctrl.paused
  }

  // Sets graph state for paused (BOOLEAN) and collapsed (BOOLEAN)
  ctrl.collapseGraph = function () {
    ctrl.collapsed = !ctrl.collapsed
    if(ctrl.collapsed) {
      ctrl.paused = true
    } else {
      ctrl.paused = false
    }
  }

  // Calls updateGraphData from parent class
  ctrl.callUpdateGraph = function () {
    ctrl.onUpdateGraphData({currencyObject: ctrl.currencyObject})
  }
}

angular.module('financeApp').component('moneyChart', {
  templateUrl: 'html/moneyChart.html',
  controller: moneyChartController,
  bindings: {
    currencyObject: '<',
    onUpdateGraphData: '&'
  }
})
