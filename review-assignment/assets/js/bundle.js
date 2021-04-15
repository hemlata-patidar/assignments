function showHide() {
  $(".login-box").hide();
  $(".sign-up").show();
}

function logInShowHide() {
  $(".sign-up").hide();
  $(".login-box").show();
}

function checkClass() {
  if($(this).hasClass("active")){
    $(this).removeClass("active");
  } else{
    $("a.active").removeClass("active");
    $(this).addClass("active");
  }
}

function logOut() {
  localStorage.removeItem('logInDetails');
  window.location.replace(loginUrl);
}

function menuResponsive() {
  $('.header-section .col-md-6').removeClass('col-xs-6');
  $('.iconhead').toggle();
  if ($(".iconhead").css('display') == 'block') {
    $('.mylinks').css('display', 'none')
  } else {
    $('.mylinks').css('display', 'block')
    $(".iconhead").css('display', 'none')
  }
}

function updateStorage() {
  var values = {};
  $.each($('#upadteForm').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  $("#full-name").text(values.firstName + ' ' + values.lastName)
  $(".user-Name").text(values.firstName + ' ' + values.lastName)
  $(".user-name-profile").text(values.firstName + ' ' + values.lastName)
  $("#about-gendar").text(values.gender)
  $("#birth-day").text(values.dob)
  $("#marry").text(values.martailStatus)
  $("#loca").text(values.location)
  $.each( getLocalData, function(i, existingUserData) {
    if (existingUserData.email == session['email']) {
      if (values.firstName != '') {
        existingUserData.firstName = values.firstName;
      }
      if (values.lastName != '') {
        existingUserData.lastName = values.lastName;
      }
      if (values.location != '') {
        existingUserData.location = values.location;
      }
      if (values.dob != '') {
        existingUserData.dob = values.dob;
      }
      if (values.martailStatus != '') {
        existingUserData.martailStatus = values.martailStatus;
      }
    }
  });
  localStorage.setItem('signUpDetails', JSON.stringify(getLocalData));
  $('[data-dismiss="modal"]').trigger('click');
}

function updateWorkStorage() {
  var values = {};
  $.each($('#upadteWorkForm').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  $("#occup").text(values.occupation)
  $(".user-occupation").text(values.occupation)
  $("#jobs").text(values.job)

  var skills = $("input[name='skills']:checked").map(function() {
    return this.value;
  }).get().join(', ');
  $.each( getLocalData, function(i, existingUserData) {
    if (existingUserData.email == session['email']) {
      if (values.job != '') {
        existingUserData.job = values.job;
      }
      if (values.occupation != '') {
        existingUserData.occupation = values.occupation;
      }
      if (values.skills != '') {
        existingUserData.skills = values.skills;
      }
    }
  });
  localStorage.setItem('signUpDetails', JSON.stringify(getLocalData));
  $('[data-dismiss="modal"]').trigger('click');
}

function readURL(input) {
  console.log(input.files)
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.display-profile').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}
 var postCount = 0;
function postAddNew() {
  var values = {};
  $.each($('#AdPost').serializeArray(), function(i, field) {
    values[field.name] = field.value;
  });
  var cls = 'post-back'+postCount;
  var imageNewUrl = values.postImage;
  totalPost = $('#activities').text();
  totalPost = 1 + parseInt(totalPost);
  var postTemplate = '<img src="./assets/images/follow1.png" class="border-img"><div class="post-line"><div class="row line-box"><div class="col-md-9"><h4>' + session['firstName'] + ' posted on your timeline</h4><h5>50 minutes ago</h5></div><div class="col-md-3"><i class="fa fa-ellipsis-v pull-right clr-gry" aria-hidden="true"></i></div></div><div class="post-back ' + cls + '"></div><div class="post-content"><h4>' + values.title + '</h4><p>' + values.postContent + '</p></div><div class="post-like"><div data-count="0" class="like"><i class="fa fa-heart" aria-hidden="true"></i><span>Like <span class="like-post"></span></span></div><div class="comment"><i class="fa fa-commenting-o" aria-hidden="true"></i><span>Comments (25)</span></div><div class="share"><i class="fa fa-share-alt" aria-hidden="true"></i><span>Share (10)</span></div></div></div>';     
  $(".time-line").append(postTemplate);
  $('.' + cls).css("background-image", "url('" + imageNewUrl + "')");
  $('#activities').text(totalPost);
  $('.photo').append('<img src="' + imageNewUrl + '">');
  postCount++;
  $('[data-dismiss="modal"]').trigger('click');
}
