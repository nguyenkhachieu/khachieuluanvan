var nhietdo = document.getElementById('TemYear').getContext('2d'),
    doam = document.getElementById('DoamYear').getContext('2d');
var myChartTem = new Chart(nhietdo, {
  type: 'line',
  data: {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    datasets: [{
      label: 'Nhiet Do',
      data: [27, 29, 30, 28, 28.5, 28.55, 27],
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
          text: 'Nhiệt độ theo năm',
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
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    datasets: [{
      label: 'Do Am',
      data: [75, 77.92, 80, 75.61, 77.08, 76.5, 74],
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
          text: 'Độ ẩm theo năm',
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
