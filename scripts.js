$(window).scroll(function(){
    if ($(window).scrollTop() >= 335) {
       $('.case-nav').addClass('fixed-nav');
    }
    else {
       $('.case-nav').removeClass('fixed-nav');
    }
});

$("#nav-item-1").click(function () {
    $('html, body').animate({
      scrollTop: $("#intro").offset().top - 120
    }, 2000);
  });
  $("#nav-item-2").click(function () {
    $('html, body').animate({
      scrollTop: $("#research").offset().top - 130
    }, 2000);
  });
  $("#nav-item-3").click(function () {
    $('html, body').animate({
      scrollTop: $("#design").offset().top - 130
    }, 2000);
  });
  $("#nav-item-4").click(function () {
    $('html, body').animate({
      scrollTop: $("#testing").offset().top - 130
    }, 2000);
  });
  $("#nav-item-5").click(function () {
    $('html, body').animate({
      scrollTop: $("#revision").offset().top - 130
    }, 2000);
  });

  $("#nav-item-1").click(function () {
    $("a").removeClass('active');
    $("#nav-item-1").addClass('active');
  });
  $("#nav-item-2").click(function () {
    $("a").removeClass('active');
    $("#nav-item-2").addClass('active');
  });
  $("#nav-item-3").click(function () {
    $("a").removeClass('active');
    $("#nav-item-3").addClass('active');
  });
  $("#nav-item-4").click(function () {
    $("a").removeClass('active');
    $("#nav-item-4").addClass('active');
  });
  $("#nav-item-5").click(function () {
    $("a").removeClass('active');
    $("#nav-item-5").addClass('active');
  });
  $(document).ready(function(){
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll < 440){
       $("a").removeClass('active');
       $("#nav-item-1").addClass('active');
      }
      else if(scroll > 440 && scroll < 880){
       $("a").removeClass('active');
       $("#nav-item-2").addClass('active');
      }
      else if(scroll > 880 && scroll < 1320){
       $("a").removeClass('active');
       $("#nav-item-3").addClass('active');
      }
      else if(scroll > 1320 && scroll < 1760){
       $("a").removeClass('active');
       $("#nav-item-4").addClass('active');
      }
      else if(scroll >= 1760){
       $("a").removeClass('active');
       $("#nav-item-5").addClass('active');
      }
    });
  });