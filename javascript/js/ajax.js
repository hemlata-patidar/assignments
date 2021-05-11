function showData(para, getState) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var arr = JSON.parse(this.responseText);
      var caseSeries = arr['cases_time_series'];
      var state = arr['statewise'];

      if (para == 'case') {
        var caseData = "<h2 class='text-center'>Cases</h2>";
        caseData += '<div class="heading"><div>Recovered</div><div>Date</div><div>Total-Confm</div><div>Total-Deceased</div><div>Total-Recovered</div></div>';
        caseData += '<div class="data-series">';
        for (i = 0; i < 10; i++) {
          caseData += '<div>' + caseSeries[i].dailyrecovered + '</div>';
          caseData += '<div>' + caseSeries[i].date + '</div>';
          caseData += '<div>' + caseSeries[i].totalconfirmed + '</div>';
          caseData += '<div>' + caseSeries[i].totaldeceased + '</div>';
          caseData += '<div>' + caseSeries[i].totalrecovered + '</div>';
        };
        caseData += '</div>';
        document.getElementById("cases").innerHTML = caseData;
      }

      if (getState) {
        var stateData = "<h2 class='text-center'>Filter State</h2>";
        stateData += '<div class="heading"><div>Active</div><div>Confirmed</div><div>Deaths</div><div>Recovered</div><div>State</div></div>';
        stateData += '<div class="data-series">';
        for (j = 0; j < state.length; j++) {
          var st = capitalize(getState.value);
          if (state[j] && state[j].state == st) {
            stateData += '<div>' + state[j].active + '</div>';
            stateData += '<div>' + state[j].confirmed + '</div>';
            stateData += '<div>' + state[j].deaths + '</div>';
            stateData += '<div>' + state[j].recovered + '</div>';
            stateData += '<div>' + state[j].state + '</div>';
          }
        };
        stateData += '</div>';
        document.getElementById("state").innerHTML = stateData;
      }
    }
  };
  xhttp.open("GET", "https://api.covid19india.org/data.json", true);
  xhttp.send();
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}