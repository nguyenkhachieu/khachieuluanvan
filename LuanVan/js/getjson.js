function repeatMe(){
 $.ajax({
  url: 'https://fir-1-d6120.firebaseio.com/logs.json',
  dataType: 'json',
  cache: true,
  timeout: 30000,
  success: function(data) {
  	var arrTem = [],
  			arrHum = [],
  			arrTime = [];
  	$.each(data, function(index, element) {
      var valueTH = $(element)[0];
      arrTem.push(valueTH.temperature);
      arrHum.push(valueTH.humidity);
      arrTime.push(valueTH.time);
	  });
	  console.log('arrTem',arrTem);
	  console.log('arrHum',arrHum);
	  var arrTemlast = arrTem.slice(-1);
	  var arrHumlast = arrHum.slice(-1);
	  $('.temperature').html(arrTemlast);
	  $('.humidity').html(arrHumlast);
	  // $('.canhbao').css('display', 'none');
	  if(arrTemlast > 30) {
	  	$('.canhbao').css('display', 'block');
	  	$('.tem-bigger').css('display', 'block');
	  }
	  if(arrTemlast < 25) {
	  	$('.canhbao').css('display', 'block');
	  	$('.tem-lower').css('display', 'block');
	  }
	  if(arrHumlast > 90) {
	  	$('.canhbao').css('display', 'block');
	  	$('.hum-bigger').css('display', 'block');
	  }
	  if(arrHumlast < 70) {
	  	$('.canhbao').css('display', 'block');
	  	$('.hum-lower').css('display', 'block');
	  }

	  var newHum = arrHum.slice(arrHum.length - 10, arrHum.length);
	  var newTem = arrTem.slice(arrTem.length - 10, arrTem.length);
	  var newTime = arrTime.slice(arrTime.length - 10, arrTime.length);

	  var nhietdo = document.getElementById('bar-chart-tem-time').getContext('2d');
		var myChartTem = new Chart(nhietdo, {
		  type: 'line',
		  data: {
		    labels: newTime,
		    datasets: [{
		      label: 'Nhiet Do',
		      data: newTem,
		      backgroundColor: "rgba(255, 99, 132, 0.5)"
		    }]
		  },
		  options: {
		    scales: {
	        yAxes: [{
	            ticks: {
	                beginAtZero: true
	            }
	        }]
		    },
		  	title: {
		  		display: true,
		  		text: 'Biểu đồ nhiệt độ',
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

		var doam = document.getElementById('bar-chart-hum-time').getContext('2d');
		var myChartTem = new Chart(doam, {
		  type: 'line',
		  data: {
		    labels: newTime,
		    datasets: [{
		      label: 'Do am',
		      data: newHum,
		      backgroundColor: "rgba(54, 162, 235, 0.5)",
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
		  		text: 'Biểu đồ độ ẩm',
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

  },
  error: function(){
      console.log('error')
  }
 });
}
$(document).ready(function() {
	repeatMe();
});

setInterval(repeatMe, 50000);

