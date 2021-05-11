
if (localStorage.getItem('logInDetails') !== null) {
  window.location.replace(homeUrl);
}
$(".log-in-form").validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    pwd: {
      required: true,
      minlength: 5
    }
  },
  messages: {
    password: {
      required: "Please provide a password",
      minlength: "Your password must be at least 5 characters long"
    },
    email: "Please enter a valid email address"
  },
  submitHandler: function(form) {
    $.each($('form').serializeArray(), function() {
      result[this.name] = this.value;
    });
    var emailForm = result.email;
    var pwdForm = result.pwd;
    if (getLocalData.length > 0) {
      $.each( getLocalData, function(i, val) {
        registeredEmail = val.email;
        registeredPwd = val.pwd;
        registeredFstName = val.firstName;
        if ((registeredEmail.toLowerCase() == emailForm.toLowerCase()) && registeredPwd == pwdForm) {
          checkExistData = true;
          LogInData['email'] = result.email;
          if (getLogInData.length == 0) {
            getLogInData.push(LogInData);
            localStorage.setItem('logInDetails', JSON.stringify(getLogInData));
          }
        }
      });
      if (checkExistData === true) {
        window.location.replace(homeUrl);
        $(".user-Name").val(registeredFstName);
      } else {
        $('.error').text('invalid details!!');
       // alert('invalid details!!')
      }
    } else {
      alert('Please signup!!')
      showHide();
    }
  }
});

$(".sign-up-form").validate({
  rules: {
    firstName: "required",
    lastName: "required",
    signEmail: {
      required: true,
      email: true
    },
    signPwd: {
      required: true,
      minlength: 5
    },
    cnfrmPwd: {
      equalTo: "#signpwd"
    },
  },
  messages: {
    firstname: "Please enter your firstname",
    lastname: "Please enter your lastname",
    password: {
      required: "Please provide a password",
      minlength: "Your password must be at least 5 characters long"
    },
    email: "Please enter a valid email address",
  },
  submitHandler: function(form) {
    var data = $('form').serialize();
    $.each($('form').serializeArray(), function() {
      result[this.name] = this.value;
    });
    var skills = $("input[name='skills']:checked").map(function() {
      return this.value;
  }).get().join(', ');
    signUpData['firstName'] = result.firstName;
    signUpData['lastName'] = result.lastName;
    signUpData['email'] = result.signEmail;
    signUpData['pwd'] = result.signPwd;
    signUpData['cnfrmPwd'] = result.cnfrmPwd;
    signUpData['skills'] = skills;
    console.log(signUpData)
    if (getLocalData) {
      $.each( getLocalData, function(i, val) {
        registeredEmail = val.email;
        if (registeredEmail.toLowerCase() === signUpData['email'].toLowerCase()) {
          checkExistData = true;
          alert('You are alredy registered!!');
        }
      });
    }
    if (checkExistData !== true) {
      getLocalData.push(signUpData);
      localStorage.setItem('signUpDetails', JSON.stringify(getLocalData));
      localStorage.removeItem('logInDetails');
      getLogInData.push(signUpData);
      localStorage.setItem('logInDetails', JSON.stringify(getLogInData));
      window.location.replace(homeUrl);
    } 
  }
});