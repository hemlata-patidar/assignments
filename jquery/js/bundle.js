var countryStateObj = {
  getCountryBaseData: function() {
    $.ajax({
      type: "GET",
      url: "https://api.covid19india.org/data.json",
      success: function(response) {
        var overallStatus = statewiseRecord = totalTestedSample = testedSampleDate = options = '';
        if (response['statewise'] && response['statewise'][0]) {
          overallStatus = response['statewise'][0];
          statewiseRecord = response['statewise'];
        }
        var deltaCnfrm = (overallStatus['deltaconfirmed']) ? ('&plus;' + addCommas(overallStatus['deltaconfirmed'])) : ('');
        var deltaRcvr = (overallStatus['deltarecovered']) ? ('&plus;' +  addCommas(overallStatus['deltarecovered'])) : ('');
        var deltaDth = (overallStatus['deltadeaths']) ? ('&plus;' + addCommas(overallStatus['deltadeaths'])) : ('');
        deltaCnfrm = (deltaCnfrm !== undefined) ? (deltaCnfrm) : ('<i class="fa fa-heart" aria-hidden="true"></i>');
        deltaRcvr = (deltaRcvr !== undefined) ? (deltaRcvr) : ('<i class="fa fa-heart" aria-hidden="true"></i>');
        deltaDth = (deltaDth !== undefined) ? (deltaDth) : ('<i class="fa fa-heart" aria-hidden="true"></i>');

        options = '<option value="India">India</option>';
        $.each( statewiseRecord, function( i, val ) {
          if (val.state && val.state !== 'Total' && val.state !== 'State Unassigned') {
            statearr[val.statecode] = val.state;
            options += '<option value="' + val.statecode + '">' + val.state + '</option>';
          }
        });
        if (response['tested']) {
          var lstRecord = (response['tested'].length) - 1;
          overallTested = response['tested'][lstRecord];
          if (overallTested) {
            totalTestedSample = overallTested['totalsamplestested'];
            testedSampleDate = overallTested['testedasof'];
          }
        }
        var updateDate = moment(overallStatus['lastupdatedtime'], "MM-DD-YYYY hh:mm:ss").format('YYYY/DD/MM');
        var sampleDate = moment(testedSampleDate, "MM-DD-YYYY hh:mm:ss").format('YYYY/DD/MM');
        $('.last-updated').text('Last updated on '+ moment(updateDate).format('lll'));
        $(".total-confirm").append("<h6 class='delta-confirm'>" + (deltaCnfrm) + "</h6><h4 class='confirmAll'>" + addCommas(overallStatus['confirmed']) + "</h4><div id='confirm-graph'></div>");
        $(".total-active").append("<h6 class='delta-recvr'>&nbsp;</h6><h4 class='activeAll'>" + addCommas(overallStatus['active']) + "</h4><div id='active-graph'></div>");
        $(".total-recover").append("<h6 class='delta-recvr'>" + (deltaRcvr) + "</h6><h4 class='recoverAll'>" + addCommas(overallStatus['recovered']) + "</h4><div id='recv-graph'></div>");
        $(".total-deceased").append("<h6 class='delta-dth'>" + (deltaDth) + "</h6><h4 class='deathAll'>" + addCommas(overallStatus['deaths']) + "</h4><div id='decease-graph'></div>");
        $(".total-tested").append("<h4 class='testedAll'>" + addCommas(totalTestedSample) + "</h4>");
        $(".total-tested").append("<h5 class='sampleAll'>" + moment(sampleDate).format('ll') + "</h5><h5>per source</h5>");
        if ($('.confirmAll').text() !== '') {
          $('.confirmed').addClass('is-confirm');
          $(".all-cases").addClass("confirm-add");
          $(".focus-state").text('India');
          $(".focus-state").addClass("confirm-add");
          $(".all-cases div").text( $('.confirmAll').text());
          $(".all-cases span").text("Confirmed");
        }
        $("#state-name").html(options);
      }
    });
  },

  getStateBaseData: function() {
    $.ajax({
      type: "GET",
      url: urlCovid + "data.min.json",
      success: function(response) {
        var stateData = dates = todayDate = '';
        var totalConfirm = totalRecovered = totalTested = totalDeceased = 0;
        $.each( response, function( i, val ) {
          var nm = i;
          if (statearr[nm] == undefined) {
            statename = statesName[nm];
          } else {
            statename = statearr[nm];
          }
          var  latestConfirm = latestDec = others = latestRecv = latestRecord = latestTest = latestVacci = population = '';
          if (val && val['total']) {
            if (val['meta']) {
              population = val['meta'].population;
            }
            if (val['delta']) {
              latestRecord = val['delta']; 
              latestConfirm = (latestRecord.confirmed) ? ('&uarr;' + addCommas(latestRecord.confirmed)):('');
              latestDec = (latestRecord.deceased) ? ('&uarr;' + addCommas(latestRecord.deceased)):('');
              latestRecv = (latestRecord.recovered) ? ('&uarr;' + addCommas(latestRecord.recovered)):('');
              latestTest = (latestRecord.tested) ? ('&uarr;' + addCommas(latestRecord.tested)):('');
              latestVacci = (latestRecord.vaccinated) ? ('&uarr;' + addCommas(latestRecord.vaccinated)):('');
            }
            totalCases = val['total'];
            others = (totalCases.other !== undefined) ? (totalCases.other) : ('-');
            if (statename !== undefined) {
              
              stateData += '<tr>';
              stateData += '<td class="cell"><a href="state.html?name=' + nm + '">' + statename + '</a></td>';
              stateData += '<td class="cell"><div class="new-con">' + (latestConfirm) + '</div>' + addCommas(totalCases.confirmed) + '</td>';
              // stateData += '<td class="cell">' + totalCases.active + '</td>';
              stateData += '<td class="cell"> <div class="new-des">' + (latestDec) + '</div>' + addCommas(totalCases.recovered) + '</td>';
              stateData += '<td class="cell"> <div class="new-recv">' + (latestRecv) + '</div>' + addCommas(totalCases.deceased) + '</td>';
              stateData += '<td class="cell"><div class="new-test">' + (latestTest) + '</div>' + addCommas(totalCases.tested) + '</td>';
              stateData += '<td class="cell"><div class="new-vaccine">' + (latestVacci) + '</div>' + addCommas(totalCases.vaccinated) + '</td>';
              stateData += '<td class="cell">' + addCommas(others) + '</td>';
              stateData += '<td class="cell"> - </td>';
              stateData += '<td class="cell"> - </td>';
              stateData += '<td class="cell"> - </td>';
              stateData += '<td class="cell"> - </td>';
              stateData += '<td class="cell">' + addCommas(population) + '</td>';
              stateData += '</tr>';
            }
          }
        });
        $("#tbody").append(stateData);
      }
    });
  },

  getSmallChartData: function(url) {
    $.ajax({
      type: 'GET',
      url: url,
      success: function(response) {
        $.each( response, function( i, val ) {
          if (i === 'TT') {
            dates = val['dates'];
            if (dates) {
              callBackChart(dates, '0')
              smallChart(dates,'confirmed');
              smallChart(dates,'recovered');
              smallChart(dates,'deceased');
              smallChart(dates,'active');
            }
          }
        });
      }
    })
  },

  getStateChangeData: function() {
    $('#state-name').change(function() {
      var selectState = $(this).val();
      $.ajax({
        type: 'GET',
        url: url,
        success: function(response) {
          $.each( response, function( i, val ) {
            if (selectState == i) {
              dates = val['dates'];
              if (dates) {
                callBackChart(dates, '0')
              }
            }
          });
        }
      })
    });
  },
  getDistrictBaseData: function(stname, url) {
    $.ajax({
      type: "GET",
      url: url,
      success: function(response) {
        $('.countryName').text(stname);
        options = '<option value="' + stname + '">' + stname + '</option>';
        var dataBar = [];
        var distNamebar = [];
        $.each( response, function( i, val ) {
          var j = 0;
          $.each( val['districts'], function( dist, distVal ) { 
           var lstRecord = (distVal['dates']);
           var lastKey = Object.keys(lstRecord).pop();
           var lastDistRecord = lstRecord[lastKey]['total'];
           if (j < 6) {
            dataBar[j] = lastDistRecord.confirmed;
            distNamebar[j] = moment(lastKey).format('ll');;
            distConfmDiv += '<div>' + addCommas(lastDistRecord.confirmed) + ' <span>' + dist + '</span></div>';
           }
            options += '<option value="' + dist + '">' + dist + '</option>';
            j++;
          });
          barChartDistrict(dataBar, distNamebar);
          var dateArr = val['dates'];
          var deltaCnfrm = deltaRcvr = deltaTst = deltaDec = 0;
          var totalConfirm = total = totalRcvr = totalTst = totalDec = 0;
          $.each( dateArr, function( i, ttl ) {
            if (ttl['delta'] && ttl['delta'].confirmed !== undefined) {
              var deltaConfrm = (ttl['delta'].confirmed) ? ((ttl['delta'].confirmed)) : ('');
              var deltaRecovr = (ttl['delta'].recovered) ? ('&plus;' + (ttl['delta'].recovered)) : ('');
              var deltaTest = (ttl['delta'].tested) ? ('&plus;' + (ttl['delta'].tested)) : ('');
              var deltaDecesed = (ttl['delta'].deceased) ? ('&plus;' + (ttl['delta'].deceased)) : ('');
            }
            if (ttl['total']) {
              var totalCnfrm = (ttl['total'].confirmed)?(ttl['total'].confirmed):('');
              var totalRcvr = (ttl['total'].recovered)?(ttl['total'].recovered):('');
              var totalTst = (ttl['total'].tested)?(ttl['total'].tested):('');
              var totalDec = (ttl['total'].deceased)?(ttl['total'].deceased):('');
            }
            totalConfirm = totalCnfrm;
            totalRecovered = totalRcvr;
            totalTested = (totalTst !== undefined) ? (totalTst) : ('');
            totalDeceased = totalDec;
            deltaCnfrm = deltaConfrm;
            deltaRcvr = deltaRecovr;
            deltaTst = deltaTest;
            deltaDec = deltaDecesed;
  
            deltaCnfrm = (deltaCnfrm !== undefined) ? (deltaCnfrm) : ('<i class="fa fa-heart" aria-hidden="true"></i>');
            deltaRcvr = (deltaRcvr !== undefined) ? (deltaRcvr) : ('<i class="fa fa-heart" aria-hidden="true"></i>');
            deltaTst = (deltaTst !== undefined) ? (deltaTst) : ('<i class="fa fa-heart" aria-hidden="true"></i>');
            deltaDec = (deltaDec !== undefined) ? (deltaDec) : ('<i class="fa fa-heart" aria-hidden="true"></i>');
          });
          
          $(".total-confirm").append("<h6 class='delta-confirm'>" + (deltaCnfrm) + "</h6><h4 class='confirmAll'>" + addCommas(totalConfirm) + "</h4><div id='confirm-graph'></div>");
          $(".total-recover").append("<h6 class='delta-recvr'>" + (deltaRcvr) + "</h6><h4 class='recoverAll'>" + addCommas(totalRecovered) + "</h4><div id='recv-graph'></div>");
          $(".total-deceased").append("<h6 class='delta-dth'>" + (deltaDec) + "</h6><h4 class='deathAll'>" + addCommas(totalDeceased) + "</h4><div id='decease-graph'></div>");
          $(".total-tested").append("<h6 class='delta-test'>" + (deltaTst) + "</h6><h4 class='testedAll'>" + totalTested + "</h4>");
          $("#state-name").html(options);
        });
       // $(".statwise-data").append(stateData);
        appendCases(stname);
      }
    });
  },
  getDistrictSmallChart: function(urlParam) {
    $.ajax({
      type: 'GET',
      url: urlCovid + 'timeseries.min.json',
      success: function(response) {
        $.each( response, function( i, val ) {
          if (i === urlParam('name')) {
            dates = val['dates'];
            if (dates) {
              callBackChart(dates, '0')
              smallChart(dates,'confirmed');
              smallChart(dates,'recovered');
              smallChart(dates,'deceased');
            }
          }
        });
      }
    })
  },
  getDistrictChangeData: function() {
    $('#state-name').change(function() {
      var selectState = $(this).val();
      $.ajax({
        type: 'GET',
        url: url,
        success: function(response) {
          $.each( response, function( i, val ) {
            $.each( val['districts'], function( dist, distVal ) { 
              if (selectState == dist) {
                var dates = distVal['dates'];
                callBackChart(dates, '0')
              }
            });
          });
        }
      })
    });
  }
}
