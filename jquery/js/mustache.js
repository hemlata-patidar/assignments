var topData = [{ "name": "Confirmed", "childClass": "total-confirm", "parentClass": "confirmed" },
{ "name": "Active", "childClass": "total-active", "parentClass": "active-case" },
{ "name": "Recovered", "childClass": "total-recover", "parentClass": "recover" },
{ "name": "Deceased", "childClass": "total-deceased", "parentClass": "deaths" }];
$.each( topData, function( index, item ) {
  var template = '<div class="col-md-3 col-xs-6 {{ parentClass }}"><div class="{{ childClass }}"><h5>{{ name }}</h5></div></div>';
  var text = Mustache.render(template, item);        
  $(".top-data").append(text);
});

var grapData = [{ "parentClass": "confirmed-graph" },
{ "parentClass": "recovered-graph" },
{ "parentClass": "deceased-graph" },
{ "parentClass": "tested-graph" },
{ "parentClass": "vaccinated-graph" }];
$.each( grapData, function( index, item ) {
  var template = '<div class="row"><div class="col-md-12"><div class="{{ parentClass }}" id="{{ parentClass }}"></div></div></div>';
  var text = Mustache.render(template, item);        
  $(".spred-trend").append(text);
});

var filter = '<div class="col-md-12"><div class="pills"><button type="button" class="begin selected">Beginning</button><button type="button" class="ninty-days">90 days</button><button type="button" class="thirty-days">30 days</button></div></div>';  
$(".filter-tab").html(filter);

var footer = '<footer class="covid-footer text-center"><div class="link"><a href="https://github.com/covid19india" target="_blank" rel="noopener noreferrer">covid19india</a></div><h5>We stand with everyone fighting on the frontlines</h5></footer>';
$(".covid-detail").append(footer);

var staticData = [{ "class": "confirmed", "h3": "Confirmed Per Million", "h1": "25,033.2", "h5": "India has 9,516.5 CPM", "p": "~25,033 out of every 10 lakh people in Maharashtra have tested positive." },
{ "class": "active", "h3": "Active Ratio", "h1": "14.8%", "h5": "", "p": "For every 100 confirmed cases, ~15 are currently infected." },
{ "class": "recovery", "h3": "Recovery Ratio", "h1": "83.4%", "h5": "", "p": "For every 100 confirmed cases, ~83 have recovered from the virus." },
{ "class": "mortality", "h3": "Case Fatality Ratio", "h1": "1.8%", "h5": "", "p": "For every 100 confirmed cases, ~2 have unfortunately passed away from the virus." },
{ "class": "gr", "h3": "Avg. Growth Rate", "h1": "1.6%", "h5": "29 Mar - 05 Apr", "p": "In the last one week, the number of new infections has grown by an average of 1.6% every day." },
{ "class": "tpm", "h3": "Tests Per Million", "h1": "1,69,588.9", "h5": "As of 1 day ago", "p": "For every 10 lakh people in Maharashtra, ~1,69,589 samples were tested." }];

$.each( staticData, function( index, item ) {
  var staticHtml = '<div class="meta-item {{ class }}"><div class="meta-item-top"><h3>{{ h3 }}</h3><span class="Tooltip" style="position: relative;"></span></div><h1>{{ h1 }}</h1><h5>{{ h5 }}</h5><p>{{ p }}</p></div>';
  var textTem = Mustache.render(staticHtml, item);        
  $(".state-meta").append(textTem);
});

