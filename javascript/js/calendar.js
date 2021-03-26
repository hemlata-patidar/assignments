function displayCalendar(){
  var dates = "";
  var FebNumberOfDays = "";
  var counter = 1;

  var dateNow = new Date();
  var month = dateNow.getMonth();
  var day = dateNow.getDate();
  var year = dateNow.getFullYear();

  var nextMonth = month + 1; 
  var prevMonth = month - 1;

  if (month == 1){
    if ( (year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)){
        FebNumberOfDays = 29;
    }else{
        FebNumberOfDays = 28;
    }
  }

  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

  var nextDate = new Date(nextMonth +' 1 ,'+year);
  var weekdays= nextDate.getDay();
  var weekdays2 = weekdays;
  var numOfDays = dayPerMonth[month];

  while (weekdays>0){
    dates += "<td class='monthPre'></td>";
    weekdays--;
  }

  while (counter <= numOfDays){ 
    if (weekdays2 > 6){
        weekdays2 = 0;
        dates += "</tr><tr>";
    }
    if (counter == day){
      dates +="<td class='dayNow'  onMouseOver='this.style.background=\"#3636dc\"; this.style.color=\"#ffffff\"' "+
            "onMouseOut='this.style.background=\"blue\"; this.style.color=\"#ffffff\"'>"+counter+"</td>";
    }else{
      dates +="<td class='monthNow' onMouseOver='this.style.background=\"#e6e4e4\"'"+
            " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";

    }
    weekdays2++;
    counter++;
  } 

  var calendarBody = "<table class='calendar'> <tr class='monthNow'><th class='montName' colspan='5'>"
    +monthNames[month]+" "+ year +"</th><th title='Previous month' class='previous-month'><</th><th title='Next month' class='next-month'>></th></tr>";
  calendarBody +="<tr class='dayNames'>  <td>Sun</td>  <td>Mon</td> <td>Tues</td>"+
      "<td>Wed</td> <td>Thurs</td> <td>Fri</td> <td>Sat</td> </tr>";
  calendarBody += "<tr>";
  calendarBody += dates;
  calendarBody += "</tr></table>";
  document.getElementById("calendar").innerHTML=calendarBody;
}

document.querySelector(".next-month").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  displayCalendar();
})