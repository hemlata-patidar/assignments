
function appendCases(stname) {
  if ($('.confirmAll').text() !== '') {
    $('.confirmed').addClass('is-confirm');
    $('.recover').removeClass('is-recover');
    $('.active-case').removeClass('is-active');
    $('.focus-state').removeClass('recover-add active-add death-add');
    $('.all-cases').removeClass('recover-add active-add death-add');
    $('.deaths').removeClass('is-death');
    $(".all-cases").addClass("confirm-add");
    $(".focus-state").text(stname);
    $(".focus-state").addClass("confirm-add");
    $(".all-cases div").text( $('.confirmAll').text());
    $(".all-cases span").text("Confirmed");
    $(".district").append(distConfmDiv);
  }
  
  $('.confirmed').on("click", function() {
    $(this).addClass('is-confirm');
    $('.recover').removeClass('is-recover');
    $('.active-case').removeClass('is-active');
    $('.focus-state').removeClass('recover-add active-add death-add');
    $('.all-cases').removeClass('recover-add active-add death-add');
    $('.deaths').removeClass('is-death');
    $(".all-cases").addClass("confirm-add");
    $(".focus-state").text(stname);
    $(".focus-state").addClass("confirm-add");
    $(".all-cases div").text( $('.confirmAll').text());
    $(".all-cases span").text("Confirmed");
  });

  $('.active-case').on("click", function() {
    $(this).addClass('is-active');
    $('.confirmed').removeClass('is-confirm');
    $('.recover').removeClass('is-recover');
    $('.deaths').removeClass('is-death');
    $('.focus-state').removeClass("recover-add death-add confirm-add");
    $('.all-cases').removeClass("recover-add death-add confirm-add");
    $(".all-cases").addClass("active-add");
    $(".focus-state").text(stname);
    $(".focus-state").addClass("active-add");
    $(".all-cases div").text( $('.activeAll').text());
    $(".all-cases span").text("Active");
  });

  $('.recover').on("click", function() {
    $(this).addClass('is-recover');
    $('.confirmed').removeClass('is-confirm');
    $('.active-case').removeClass('is-active');
    $('.deaths').removeClass('is-death');
    $('.focus-state').removeClass('death-add active-add confirm-add');
    $('.all-cases').removeClass('death-add active-add confirm-add');
    $(".all-cases").addClass("recover-add");
    $(".focus-state").text(stname);
    $(".focus-state").addClass("recover-add");
    $(".all-cases div").text( $('.recoverAll').text());
    $(".all-cases span").text("Recovered");
  });

  $('.deaths').on("click", function() {
    $(this).addClass('is-death');
    $('.confirmed').removeClass('is-confirm');
    $('.active-case').removeClass('is-active');
    $('.recover').removeClass('is-recover');
    $('.focus-state').removeClass('recover-add active-add confirm-add');
    $('.all-cases').removeClass('recover-add active-add confirm-add');
    $(".all-cases").addClass("death-add");
    $(".focus-state").text(stname);
    $(".focus-state").addClass("death-add");
    $(".all-cases div").text( $('.deathAll').text());
    $(".all-cases span").text("Deceased");
  });
}

google.charts.load('current', {'packages':['corechart', 'Line']});
// google.charts.load('current', {
//   callback: smallChart,
//   packages: ['corechart']
// });

// google.charts.load('current', {
//   callback: confirmedChart,
//   packages: ['corechart']
// });
google.charts.setOnLoadCallback(smallChart);
google.charts.setOnLoadCallback(confirmedChart);

function smallChart(total, typeVal) {
  var data = new google.visualization.DataTable();
  var arrConfirmedData = arrDeseased = arrTested = arrVaccinated = arrRecovered = [];
  var titleName = chartAppendIdsmall = bgColor = baseColor = '';

  data.addColumn('date', 'Month');
  if (typeVal === 'confirmed') {
    data.addColumn('number', "");
    chartAppendIdsmall = 'confirm-graph';
    $.each( total, function( i, val ) {
      arrConfirmedData.push([new Date(i),val['total'].confirmed]);
    });
    data.addRows(arrConfirmedData);
    baseColor = '#E13530';
  } else if (typeVal === 'recovered') {
    data.addColumn('number', "");
    chartAppendIdsmall = 'recv-graph';
    $.each( total, function( i, val ) {
      arrRecovered.push([new Date(i),val['total'].recovered]);
    });
    data.addRows(arrRecovered);
    baseColor = '#4CA646';
  } 
  else if (typeVal === 'deceased') {
    data.addColumn('number', "");
    chartAppendIdsmall = 'decease-graph';
    $.each( total, function( i, val ) {
      arrDeseased.push([new Date(i),val['total'].deceased]);
    });
    data.addRows(arrDeseased);
    baseColor = '#6C757D';
  } 

  var optionsSmall = {
    hAxis: {
      textPosition: 'none'
    },
    backgroundColor: bgColor,
    width: 100,
    height: 50,
    vAxis: {
      gridlines: {
        color: 'transparent'
      },
      textPosition: 'none'
    },
    curveType: 'function',
    series: {
      0: { color: baseColor },
    },
    legend: { position: 'top',
    },  
  };

  if (chartAppendIdsmall) {
    var chart = new google.visualization.LineChart(document.getElementById(chartAppendIdsmall));
    chart.draw(data, optionsSmall);
  }
}

function addCommas(x) {
  if (x) {
   x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }
}

// google.charts.load('current', {'packages': ['corechart'], 'callback': confirmedChart});

function confirmedChart(total, typeVal,days) {
  var data = new google.visualization.DataTable();
  var arrConfirmedData = arrDeseased = arrTested = arrVaccinated = arrRecovered = [];
  var titleName = chartAppendId = bgColor = baseColor = '';
  var customDate = '';
  if (days == '90') {
    customDate = customDateNinty;
  } else if (days == '30') {
    customDate = customDatethrty;
  }
  data.addColumn('date', 'Month');
  if (typeVal === 'confirmed') {
    data.addColumn('number', "Confirmed Cases");
    titleName = 'Confirmed';
    chartAppendId = 'confirmed-graph';
    $.each( total, function( i, val ) {
      if (customDate && new Date(customDate) <= new Date(i) && days != '0') {
        arrConfirmedData.push([new Date(i),val['total'].confirmed]);
      } else if (days == '0') {
        arrConfirmedData.push([new Date(i),val['total'].confirmed]);
      }
    });
    data.addRows(arrConfirmedData);
    bgColor = '#4D1229';
    baseColor = '#E13530';
  } else if (typeVal === 'recovered') {
    data.addColumn('number', "Recovered Cases");
    titleName = 'Recovered';
    chartAppendId = 'recovered-graph';
    $.each( total, function( i, val ) {
      if (customDate && new Date(customDate) <= new Date(i) && days != '0') {
        arrRecovered.push([new Date(i),val['total'].recovered]);
      } else if (days == '0')  {
        arrRecovered.push([new Date(i),val['total'].recovered]);
      }
    });
    data.addRows(arrRecovered);
    bgColor = '#1A382D';
    baseColor = '#4CA646';
  } else if (typeVal === 'deceased') {
    data.addColumn('number', "Deceased Cases");
    
    titleName = 'Deseased';
    chartAppendId = 'deceased-graph';
    $.each( total, function( i, val ) {
      if (customDate && new Date(customDate) <= new Date(i) && days != '0') {
        arrDeseased.push([new Date(i),val['total'].deceased]);
      } else if (days == '0') {
        arrDeseased.push([new Date(i),val['total'].deceased]);
      }
    });
    data.addRows(arrDeseased);
    bgColor = '#212231';
    baseColor = '#6C757D';
  } else if (typeVal === 'tested') {
    data.addColumn('number', "Tested Cases");
    titleName = 'Tested';
    chartAppendId = 'tested-graph';
    $.each( total, function( i, val ) {
      if (customDate && new Date(customDate) <= new Date(i) && days != '0') {
        arrTested.push([new Date(i),val['total'].tested]);
      } else if (days == '0') {
        arrTested.push([new Date(i),val['total'].tested]);
      }
    });
    data.addRows(arrTested);
    bgColor = '#230F41';
    baseColor = '#9573B8';
  } else if (typeVal === 'vaccinated') {
    var latestVacc = 0;
    data.addColumn('number', "Vaccinated Cases");
    titleName = 'Vaccinated';
    chartAppendId = 'vaccinated-graph';
    var lastKey = Object.keys(total).pop();
    $.each( total, function( i, val ) {
      if (lastKey == i) {
        latestVacc = val['total'].vaccinated;
      }
      if (customDate && new Date(customDate) <= new Date(i) && days != '0') {
        arrVaccinated.push([new Date(i),val['total'].vaccinated]);
      } else if (days == '0') {
        arrVaccinated.push([new Date(i),val['total'].vaccinated]);
      }
    });
    $('.latst-vaccin').text(addCommas(latestVacc));
    data.addRows(arrVaccinated);
    bgColor = '#2E1F30';
    baseColor = '#ED537F';
  }
  
  var options1 = {
    hAxis: {
      textStyle:{color: baseColor},
      gridlines: {
        color: 'transparent'
      },
      baselineColor: baseColor,
    },
    backgroundColor: bgColor,
    width: 500,
    height: 200,
    vAxis: {
      gridlines: {
        color: 'transparent'
      },
      baselineColor: baseColor,
      textStyle:{color: baseColor},
    },
    curveType: 'function',
    series: {
      0: { color: baseColor },
    },
    legend: { position: 'top',
      textStyle: {color: baseColor}
    },  
  };
  if (chartAppendId) {
    var chart = new google.visualization.LineChart(document.getElementById(chartAppendId));
    chart.draw(data, options1);
  }
}

function getKeyByValue(object, value) {
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (object[prop] === value)
      return prop;
    }
  }
}

function barChartDistrict(data, lbl) {
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lbl,
      datasets: [{
          label: "",
          data: data,
          backgroundColor: 'rgba(255, 7, 58, 0.565)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderRadius: '5px',
          borderWidth: 1
      }]
    },
    options: {
      legend: { display: false },
      scales: {
        x: {
          barPercentage: 0.4
        },
        y: {
          beginAtZero: true,
          ticks: {
            display: false
        }
        }
      }
    }
  });
}

function callBackChart(dates, days) {
  confirmedChart(dates, 'confirmed', days);
  confirmedChart(dates, 'recovered', days);
  confirmedChart(dates, 'deceased', days);
  confirmedChart(dates, 'tested', days);
  confirmedChart(dates, 'vaccinated', days);
}

function ajaxCallGraphState(event) {
  var selectState = $('#state-name').val();
  var stKey = getKeyByValue(statesName, selectState);
  $.ajax({
    type: 'GET',
    url: event.data.url,
    success: function(response) {
      $.each( response, function( i, val ) {
        if(stKey && stKey !== undefined){
          var dates = val['dates'];
          callBackChart(dates, event.data.days)
        }
        $.each( val['districts'], function( dist, distVal ) { 
          if (selectState == dist) {
            var dates = distVal['dates'];
            callBackChart(dates, event.data.days)
          }
        });
      });
    }
  })
}

function ajaxCallGraphIndia(event) {
  var selectState = $('#state-name').val();
  if (selectState == 'India') {
    selectState = 'TT';
  }
  $.ajax({
    type: 'GET',
    url: event.data.url,
    success: function(response) {
      $.each( response, function( i, val ) {
        if (selectState == i) {
          dates = val['dates'];
          if(dates) {
            callBackChart(dates, event.data.days)
          }
        }
      });
    }
  })
}
