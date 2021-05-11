$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
    $('[data-toggle="popover"]').popover();
    // $("#my-carousel").carousel();
    $("#my-carousel").carousel({interval: 2000, pause: "hover"});
  // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#my-carousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#my-carousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#my-carousel").carousel(2);
    });
    $(".item4").click(function(){
      $("#my-carousel").carousel(3);
    });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#my-carousel").carousel("prev");
    });
    $(".right").click(function(){
      $("#my-carousel").carousel("next");
    });
  });