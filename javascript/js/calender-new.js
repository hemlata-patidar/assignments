var date = new Date();
var evts = [];
var calEvent = {};
calEvent = localStorage.getItem("calendarEvent");
if (calEvent === null) {
  calEvent = {
    'key' : 'value',
  };
}
function displayCalendar() { 
  date.setDate(1);
  var lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  var firstDay = date.getDay();
  var prevDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  var nextMonthDay  = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    1
  ).getDay();
  var today = new Date();
  var weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dayName = '';
  var days = "";
  var daysEvent = "";
  for (var y = 0; y < weekdays.length; y++) {
    dayName += "<div> " + weekdays[y] + "</div>";
  }
  document.getElementsByClassName("weekdays")[0].innerHTML = document.getElementsByClassName("weekday-event")[0].innerHTML = dayName;
  document.getElementById("month").innerHTML = months[date.getMonth ()] + ' - ' +  date.getFullYear ();

  for (m = 0; m <= 11; m++) {
    var optn = document.createElement("OPTION");
    optn.text = months[m];
    optn.value = (m+1);
    if ( m == date.getMonth()) {
      optn.selected = true;
    }
    document.getElementById('monthSelect').options.add(optn);
  }

  for(y = 1994; y <= 2050; y++) {
    var optn = document.createElement("OPTION");
    optn.text = optn.value = y;
    if (y == date.getFullYear()) {
      optn.selected = true;
    }
    document.getElementById('year').options.add(optn);
  }

  var event = JSON.parse(localStorage.getItem("calendarEvent"));

  for (j = firstDay; j > 0; j--) {
    days += "<div class='prev-date'>" + (prevDate - j + 1) + "</div>";
    daysEvent += "<div class='prev-date'>" + (prevDate - j + 1) + "</div>";
  }

  for (i = 1; i <= lastDate; i++) {
    if (i == today.getDate() && date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()) {
      days += "<div class='today-date'>" + i + "</div>";
      var match = 'no';
      for (var key in event){
        if (key === (i + '' + today.getMonth() + '' + today.getFullYear())) {
          var val = event[key];
          match = 'yes';
          daysEvent += "<div class='today-dt' data-key='" + i + date.getMonth() + date.getFullYear() + "'>" + i + " <p>" + val + "</p></div>";
          break;
        }
      }
      if (match === 'no') {
        daysEvent += "<div class='today-dt' data-key='" + i + date.getMonth() + date.getFullYear() + "'>" + i + "</div>";
      }
    } else {
      days += "<div>" + i + "</div>";
      var match = 'no';
      for (var key in event) {
        if (key === (i + '' + date.getMonth() + '' + date.getFullYear())){
          var val = event[key];
          var match = 'yes';
          daysEvent += "<div data-key='" + i + date.getMonth() + date.getFullYear() + "'>" + i + " <p>" + val + "</p></div>";
        }
      }
      if (match === 'no') {
        daysEvent += "<div onclick='openModal(this);' data-key='" + i + date.getMonth() + date.getFullYear() + "'>" + i + "</div>";
      } 
    }
  }
  for (k = 1; k <= (7 - nextMonthDay); k++) {
    if (nextMonthDay != 0) {
      days += "<div class='prev-date'>" + k + "</div>";
      daysEvent += "<div class='prev-date'>" + k + "</div>";
    }
  }
  document.getElementsByClassName("days")[0].innerHTML = days;
  document.getElementsByClassName("day-event")[0].innerHTML = daysEvent;
}

function moveMonth(parameter) {
  if (parameter === 'prev') {
    date.setMonth(date.getMonth() - 1);
  } else if(parameter === 'next') {
    date.setMonth(date.getMonth() + 1);
  }
  displayCalendar();
}

function selectMonth() {
  var mnth = document.getElementById("monthSelect").value;
  date.setMonth(mnth - 1);
  displayCalendar();
}

function selectYear() {
  var yer = document.getElementById("year").value;
  date.setFullYear(yer);
  displayCalendar();
}

function openModal(identifier) {
  var element = document.getElementById("eventModal");
  element.style.display = "block";
  element.classList.add("in");
  var key = $(identifier).data('key');
  document.getElementById("datevalue").value = key;
}

function saveEvent() {
  var element = document.getElementById("eventModal");
  element.style.display = "none";
  element.classList.remove("in");
  var keyName = document.getElementById("datevalue").value;
  var ttl = document.getElementById("event").value;
  if(typeof calEvent !== 'object'){
    calEvent = JSON.parse(calEvent);
  }
  if (!calEvent && calEvent === null) {
    calEvent[keyName] = ttl;
  } else {
    calEvent[keyName] = ttl;
  }
  var node = document.createElement("p");
  var textnode = document.createTextNode(ttl);  
  node.appendChild(textnode);                 
  document.querySelector("[data-key='" + keyName + "']").appendChild(node); 
  localStorage.setItem("calendarEvent", JSON.stringify(calEvent));
}