
$(document).ready( function() {
  onInit();
});

function onInit() {
  $("#createAccount").click( showHide);
  $("#loginAccount").click( logInShowHide);
  $("li a").click( checkClass);
  $(".log-outsession").click(logOut);
  $("#loginAccountUpdate").click(updateStorage);
  $("#workSignupUpdate").click(updateWorkStorage);
  $('#postAddNew').click(postAddNew);

  $("#uploadProfile").change(function(){
    readURL(this);
  });

  $("body").on('click', '.like', function(){
    var getCount  = $(this).data("count");
    var likeCount = 0;
    var likeColor = '#828080';
    if (getCount == 1) {
      likeCount = '';
    } else {
      likeCount = getCount+1;
      likeColor = '#149de7';
    }
    $(this).data("count",likeCount);
    $(this).find(".like-post").text(likeCount);
    $(this).find(".fa-heart").css('color',likeColor);
  })

  $("body").on('click', '.clr-gry', function(){
    var getDiv  = $(this).closest(".post-line").remove();
    $('.border-img').remove();
    // console.log(getDiv)
    totalPost = $('#activities').text();
    totalPost = parseInt(totalPost) - 1;
    $('#activities').text(totalPost);
  })


  $(".follow-imgtext button").click(function(){
    var followerId = $(this).attr("id");
    $(this).prop('disabled', true);
    $("#" + followerId).html('<i class="fa fa-check" aria-hidden="true"></i>');
    var frndsName = $('.'+followerId).find('h4').text();
    var frndsOccup = $('.'+followerId).find('h5').text();
    var frndProfile = $('.'+followerId).find('img').attr('src');

    var frndContentAppend = '<div class="friends-page-new friends-page-' + followerId + '"><div class="col-md-6"><div class="row frnd-content-new"><div class="col-md-3"><img src="' + frndProfile + '"></div><div class="col-md-6"><h4>' + frndsName + '</h4><h5>' + frndsOccup + '</h5></div><div class="col-md-3"><button class="' + followerId + '">Unfollow</button></div></div></div>';
    $("#friends").append(frndContentAppend);
    countFrnd++;
    $('#following').text(countFrnd);
    $('.frnds-img').append('<img src="' + frndProfile + '">');
  });

  $("body").on('click', '.frnd-content-new button', function(){
    var unfollowClass = $(this).attr("class");
    $('#' + unfollowClass).prop('disabled', false);
    $("#" + unfollowClass).html('+ <i class="fa fa-user" aria-hidden="true"></i>');
    $('.friends-page-' + unfollowClass).css('display', 'none');
  });
  
};