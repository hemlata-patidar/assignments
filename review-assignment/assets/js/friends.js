var frndContent = '<div class="friends-page"><div class="row"><div class="col-md-6"><div class="row frnd-content"><div class="col-md-3"><img src="./assets/images/friends.png"></div><div class="col-md-9"><h4>Josephine Doe</h4><h5>Software Engineer at Phoinexcoded</h5></div></div></div><div class="col-md-6"><div class="row frnd-content"><div class="col-md-3"><img src="./assets/images/friends.png"></div><div class="col-md-9"><h4>Josephine Doe</h4><h5>Software Engineer at Phoinexcoded</h5></div></div></div></div></div>';
$("#friends").append(frndContent);

var frndlist = '<img src="./assets/images/girl.png">';

var textFrnd = Mustache.render(frndlist);  
for (i = 0; i < 2; i++) {
  $(".frnds-img").prepend(textFrnd);
}