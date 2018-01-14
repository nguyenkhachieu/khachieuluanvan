var nhietdo = document.getElementById('TemMonth').getContext('2d'),
    doam = document.getElementById('DoamMonth').getContext('2d');
var myChartTem = new Chart(nhietdo, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October', 'November', 'December'],
    datasets: [{
      label: 'Nhiet Do',
      data: [28, 29, 28.3, 30, 30.2, 29.7, 28, 29.1, 29.9, 30, 27, 27.5],
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
          text: 'Nhiệt Độ theo tháng',
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October', 'November', 'December'],
    datasets: [{
      label: 'Do Am',
      data: [80, 70, 75, 78, 75.5, 80, 80.5, 88, 86.2, 86.5, 87, 85],
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
          text: 'Độ ẩm theo tháng',
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
