if (localStorage.getItem('signUpDetails') === null) {
  getLocalData = [];
} else {
  getLocalData = JSON.parse(localStorage.getItem('signUpDetails'));
}

if (localStorage.getItem('logInDetails') === null) {
  getLogInData = [];
} else {
  getLogInData = JSON.parse(localStorage.getItem('logInDetails'));
}

var logEmail = '';
var session = [];
if (getLogInData.length > 0) {
  $.each( getLogInData, function(i, val) {
    logEmail = val.email;
  })
}

$.each( getLocalData, function(i, val) {
  if (val.email == logEmail) {
    session['email'] = val.email;
    session['dob'] = val.dob;
    session['firstName'] = val.firstName;
    session['gender'] = val.gender;
    session['job'] = val.job;
    session['lastName'] = val.lastName;
    session['location'] = val.location;
    session['martailStatus'] = val.martailStatus;
    session['occupation'] = val.occupation;
    session['skills'] = val.skills;
  }
});
