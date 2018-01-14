var nhietdo = document.getElementById('myChartTem').getContext('2d'),
    doam = document.getElementById('myChartDoam').getContext('2d');
var myChartTem = new Chart(nhietdo, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Nhiet Do',
      data: [27, 28, 27.5, 26.4, 27.8, 28, 30],
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    }]
  },
  options: {
        scales: {
          yAxes: [{
              ticks: {
                beginAtZero: true,
              }
          }]
        },
        title: {
          display: true,
          text: 'Nhiệt độ theo ngày',
          fontSize: 25
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontColor: '#000'
          }
        }
      }
});
var myChartDoam = new Chart(doam, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Do Am',
      data: [80, 90, 50, 70, 95, 90, 70],
      backgroundColor: "rgba(54, 162, 235, 0.5)"
    }]
  },
  options: {
        scales: {
          yAxes: [{
              ticks: {
                beginAtZero: true,
              }
          }]
        },
        title: {
          display: true,
          text: 'Độ ẩm theo ngày',
          fontSize: 25
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontColor: '#000'
          }
        }
      }
});
var ctx = document.getElementById("myChartsosanh").getContext('2d');

var original = Chart.defaults.global.legend.onClick;
Chart.defaults.global.legend.onClick = function(e, legendItem) {
update_caption(legendItem);
original.call(this, e, legendItem);
};

var myChartsosanh = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    datasets: [{
      label: 'nhiet do nam 2015',
      backgroundColor: "#ff0000",
      data: [27, 29, 30.2, 28.5, 28.75, 26, 26,29.5, 27, 29.2,29,28.5],
    }, {
      label: 'nhiet do nam 2016',
      backgroundColor: "#0000ff",
      data: [26, 29.5, 31, 27.5, 25.75, 28, 26,30.05, 27.27, 29.28,28.9,29],
    }, {
      label: 'nhiet do nam 2017',
      backgroundColor: "#006666",
      data: [26.5, 29, 31.05, 27.5, 26.75, 27.25, 26.56,30.5, 27.67, 29,27.9,28.5],
    }]
  },
  options: {
        scales: {
          yAxes: [{
              ticks: {
                beginAtZero: true,
              }
          }]
        }
      }
});

var ctxDoam = document.getElementById("myChartsosanhdoam").getContext('2d');

var original = Chart.defaults.global.legend.onClick;
Chart.defaults.global.legend.onClick = function(e, legendItem) {
update_caption(legendItem);
original.call(this, e, legendItem);
};

var myChartsosanhdoam = new Chart(ctxDoam, {
  type: 'bar',
  data: {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    datasets: [{
      label: 'do am nam 2015',
      backgroundColor: "#cc6600",
      data: [75, 65, 70, 72.5, 78.75, 76, 76.2,69.5, 67, 69.2,70.05,68.5],
    }, {
      label: 'do am nam 2016',
      backgroundColor: "#997300",
      data: [76, 69.5, 80, 77.5, 75.75, 78, 80,80.05, 77.27, 79.28,78.9,79],
    },{
      label: 'do am nam 2017',
      backgroundColor: "#009999",
      data: [78, 79.5, 80, 79.5, 85.75, 79.95, 80.65,80.05, 87.27, 76.28,75.9,79.05],
    }]
  },
  options: {
        scales: {
          yAxes: [{
              ticks: {
                beginAtZero: true,
              }
          }]
        }
      }
});