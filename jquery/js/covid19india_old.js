$(document).ready( function() {
  $.ajax({
    type: "GET",
    url: "https://api.covid19india.org/data.json",
    //dataType: 'json',
    success: function(response) {
      //var allData = JSON.parse(response);
      var overallStatus = statewiseRecord = totalTestedSample = statewise = testedSampleDate = options = '';
      if (response['statewise'] && response['statewise'][0]) {
        overallStatus = response['statewise'][0];
        statewiseRecord = response['statewise'];
      }
      if (response['tested']) {
        var lstRecord = (response['tested'].length) - 1;
        overallTested = response['tested'][lstRecord];
        if (overallTested) {
          totalTestedSample = overallTested['totalsamplestested'];
          testedSampleDate = overallTested['testedasof'];
        }
      }
      
      $(".total-confirm").append("<h4>" + overallStatus['confirmed'] + "</h4>");
      $(".total-active").append("<h4>" + overallStatus['active'] + "</h4>");
      $(".total-recover").append("<h4>" + overallStatus['recovered'] + "</h4>");
      $(".total-deceased").append("<h4>" + overallStatus['deaths'] + "</h4>");
      $(".total-tested").append("<h4>" + totalTestedSample + "</h4>");
      $(".total-tested").append("<h5>" + testedSampleDate + "</h5><h5>per source</h5>");
      options = '<option value="India">India</option>';
      $.each( statewiseRecord, function( i, val ) {
        if (val.state && val.state !== 'Total' && val.state !== 'State Unassigned') {
          statewise += '<tr>';
          statewise += '<td class="cell">' + val.state + '</td>';
          statewise += '<td class="cell">' + val.confirmed + '</td>';
          statewise += '<td class="cell">' + val.active + '</td>';
          statewise += '<td class="cell">' + val.recovered + '</td>';
          statewise += '<td class="cell">' + val.deaths + '</td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '<td class="cell"> - </td>';
          statewise += '</tr>';
          options += '<option value="' + val.statecode + '">' + val.state + '</option>';
        }
      });
      $(".statwise-data").append(statewise);
      $("#state-name").html(options);
    }
  });

  $('#state-name').change(function() {
    $.ajax({
      type: 'GET',
      url: 'https://api.covid19india.org/data.json',
      success: function(response) {
        //console.log(response['statewise'])
        var statewiseRecord1 = '';
        if (response['statewise']) {
          statewiseRecord1 = response['statewise'];
        }
        
        addData(statewiseRecord1);
      }
    })
  });
});