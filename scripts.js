$(".inline-link").click(function () {
  $(".inline-link").css("display","none");
  $(".inline-link-active").css("display","block");
  $(".collapsed-text").css("display","block");
});
$(".inline-link-active").click(function () {
  $(".inline-link").css("display","block");
  $(".inline-link-active").css("display","none");
  $(".collapsed-text").css("display","none");
});


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

  // $("#nav-item-1").click(function () {
  //   $("a").removeClass('active-blue');
  //   $("#nav-item-1").addClass('active-blue');
  // });
  // $("#nav-item-2").click(function () {
  //   $("a").removeClass('active-blue');
  //   $("#nav-item-2").addClass('active-blue');
  // });
  // $("#nav-item-3").click(function () {
  //   $("a").removeClass('active-blue');
  //   $("#nav-item-3").addClass('active-blue');
  // });
  // $("#nav-item-4").click(function () {
  //   $("a").removeClass('active-blue');
  //   $("#nav-item-4").addClass('active-blue');
  // });
  // $("#nav-item-5").click(function () {
  //   $("a").removeClass('active-blue');
  //   $("#nav-item-5").addClass('active-blue');
  // });
  $(document).ready(function(){
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll < 1200){
       $("a").removeClass('active-blue');
       $("#nav-item-1").addClass('active-blue');
      }
      else if(scroll > 1200 && scroll < 2800){
       $("a").removeClass('active-blue');
       $("#nav-item-2").addClass('active-blue');
      }
      else if(scroll > 2800 && scroll < 4900){
       $("a").removeClass('active-blue');
       $("#nav-item-3").addClass('active-blue');
      }
      else if(scroll > 4900 && scroll < 5800){
       $("a").removeClass('active-blue');
       $("#nav-item-4").addClass('active-blue');
      }
      else if(scroll >= 5800){
       $("a").removeClass('active-blue');
       $("#nav-item-5").addClass('active-blue');
      }
    });
  });

$("#nav-item-1-red").click(function () {
    $('html, body').animate({
      scrollTop: $("#intro").offset().top - 140
    }, 2100);
  });
  $("#nav-item-2-red").click(function () {
    $('html, body').animate({
      scrollTop: $("#design").offset().top - 150
    }, 2000);
  });
  $("#nav-item-3-red").click(function () {
    $('html, body').animate({
      scrollTop: $("#final-design").offset().top - 130
    }, 2000);
  });
  // $("#nav-item-1-red").click(function () {
  //   $("a").removeClass('active-red');
  //   $("#nav-item-1-red").addClass('active-red');
  // });
  // $("#nav-item-2-red").click(function () {
  //   $("a").removeClass('active-red');
  //   $("#nav-item-2-red").addClass('active-red');
  // });
  // $("#nav-item-3-red").click(function () {
  //   $("a").removeClass('active-red');
  //   $("#nav-item-3-red").addClass('active-red');
  // });
  $(document).ready(function(){
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if(scroll < 1480){
       $("a").removeClass('active-red');
       $("#nav-item-1-red").addClass('active-red');
      }
      else if(scroll > 1480 && scroll < 5700){
       $("a").removeClass('active-red');
       $("#nav-item-2-red").addClass('active-red');
      }
      // else if(scroll > 5700 && scroll < 8760){
      //  $("a").removeClass('active-red');
      //  $("#nav-item-3-red").addClass('active-red');
      // }
      // else if(scroll > 4620 && scroll < 4760){
      //  $("a").removeClass('active-red');
      //  $("#nav-item-4-red").addClass('active-red');
      // }
      else if(scroll >= 5700){
       $("a").removeClass('active-red');
       $("#nav-item-3-red").addClass('active-red');
      }
    });
  });
