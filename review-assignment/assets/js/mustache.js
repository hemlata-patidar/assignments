if (localStorage.getItem('logInDetails') == null) {
  window.location.replace(loginUrl);
}

var followData = [{ "h3": "485", "h5": "Following", "id": "following" },
{ "h3": "2K", "h5": "Followers", "id": "followers"},
{ "h3": "1", "h5": "Posts", "id": "activities"}
];
$.each( followData, function( index, item ) {
  var template = '<div class="col-md-4 col-xs-4"><h3 id="{{ id }}">{{ h3 }}</h3><h5> {{ h5 }}</h5></div>';
  var text = Mustache.render(template, item);        
  $(".follow-append").append(text);
});

var folloWho = [{ "class": "red-dot", "image": 'follow1', "name" : "Chetan Rathore", "occup" : "Entrepreneur", "id": "follow-user1"},
{ "class": "green-dot", "image": 'follow2', "name" : "Chirag Jain", "occup" : "Civil Engineer", "id": "follow-user2"},
{ "class": "red-dot", "image": 'follow3', "name" : "Avi Dhadhichi", "occup" : "Software Engineer", "id": "follow-user3"},
{ "class": "green-dot", "image": 'follow1', "name" : "Kapil Sharma", "occup" : "Entertainer", "id": "follow-user4"}
];
$.each( folloWho, function( index, item ) {
  var template = '<div class="row {{ id }}"><div class="col-md-3"><img src="./assets/images/{{image}}.png"><span class="{{ class }}"><i class="fa fa-circle" aria-hidden="true"></i></span></div><div class="col-md-6"><h4>{{ name }}</h4><h5>{{ occup }}</h5></div><div class="col-md-3"><button id="{{ id }}" class="btn btn-default"> + <i class="fa fa-user" aria-hidden="true"></i></button></div></div>';
  var text = Mustache.render(template, item);        
  $(".follow-imgtext").append(text);
});

var headIcon = [{ "class": "fa fa-search", "id": "search"},
{ "class": "fa fa-bell-o", "id": "bell"},
{ "class": "fa fa-comments-o", "id": "comment"}
];
$.each( headIcon, function( index, item ) {
  var template = '<div class="col-md-1"><i class="{{ class }}" aria-hidden="true"></i><span id="{{ id }}"></span></div>';
  var text = Mustache.render(template, item);        
  $(".head-icons").append(text);
});

$("#bell").text('9');
$("#comment").text('5');