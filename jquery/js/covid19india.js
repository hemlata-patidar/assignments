$(document).ready( function() {
  onInit();
});

function onInit() {
  var stname = 'India';
  var url = urlCovid + 'timeseries.min.json';
  countryStateObj.getCountryBaseData();
  countryStateObj.getStateBaseData();
  countryStateObj.getSmallChartData(url);
  countryStateObj.getStateChangeData();
  $(".ninty-days").click({url: url, days: "90"}, ajaxCallGraphIndia);
  $(".thirty-days").click({url: url, days: "30"}, ajaxCallGraphIndia);
  $(".begin").click({url: url, days: "0"}, ajaxCallGraphIndia);
  appendCases(stname);
};
  
