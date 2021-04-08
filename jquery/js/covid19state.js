$(document).ready( function() {
  onInit();
});

function onInit() {
  var urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
  }
  var url = urlCovid + "timeseries-" + urlParam('name') + ".min.json";
  stname = statesName[urlParam('name')];
  countryStateObj.getDistrictBaseData(stname, url);
  countryStateObj.getDistrictSmallChart(urlParam);
  countryStateObj.getDistrictChangeData();

  $(".ninty-days").click({url: url, days: "90"}, ajaxCallGraphState);
  $(".thirty-days").click({url: url, days: "30"}, ajaxCallGraphState);
  $(".begin").click({url: url, days: "0"}, ajaxCallGraphState);
  
};
