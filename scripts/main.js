/**************** Send Email *************************/
function sendMail() {
  var name = $("#name").val();
  var email = $("#email").val();
  var msg = encodeURI($("#msg").val());

  $.get("./sendmail.php?name=" + name + "&email=" + email + "&msg=" + msg, function(data) {
    if(data === "Versendet.") {
      console.log("jup");
      $("#name").val('');
      $("#email").val('');
      $("#msg").val('');
    }
    $("#submit").val(data);
  });
  setTimeout(function() {
    $("#submit").val("Senden");
  }, 3000);
}

/**************** Send Email  END ********************/


/* Burger menu. Rotate bars on click. */

$(document).ready(function() {


  var menuToggle = false;
  $(".burgerMenu").on("click", function() {
    $(".burgerMenu span").css("background", "#333");
    if(menuToggle === false) {
      $(this).toggleClass("active");
      $(".menu").addClass("menu-toggle");
      menuToggle = true;
    }
    else {
      $(this).toggleClass("active");
      $(".menu").removeClass("menu-toggle");
      menuToggle = false;
    }
  });

  /**************** Navigation scrolling */
  $(".menu ul a").on("click", function(e) {
    e.preventDefault();
    var hash = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500, 'easeInOutExpo', function() {
      $(".burgerMenu").removeClass("active");
      $(".menu").removeClass("menu-toggle");
      menuToggle = false;
    });
  });
  /**************** Navigation scrolling end *****************/

  /********* MISC ***************/

  $(".arrow-up").on("click", function() {
    $('html, body').animate({
      scrollTop: "0px"
    }, 1200, 'easeInOutExpo');
  });

  $(".zum-kontakt").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#contact").offset().top
    }, 1200, 'easeInOutExpo');
  });

  /************ MISC END **************/

  /******************* Mehr info complete overlay ********************/
  $(".mehr-info").on("click", function(e) {
    e.preventDefault();
    $(".complete-overlay").css(
      {
	"display" : "block"
      }
    ).animate(
    {
      "opacity" : 1
    }, 500, function() {
      $(".complete-overlay").html('<div class="overlay-content"><img src="img/bildvermietung.jpg"></div>');
    });
    $("body, html").css("overflow", "hidden");
  });
  $(".complete-overlay").on("click", function() {
    $(this).css(
    {
      "display" : "none",
      "opacity" : "0"
    });
    $("body, html").css("overflow", "initial");
  });

  /******************** Mehr info complete overlay end ******************/


  /************* Catch escape key and close overlay ****************/
  $(document).keyup(function(e) {
    if(e.keyCode == 27) {
      $(".complete-overlay").trigger("click");
    }
  });
  /************* Catch escape key end ************************/

  /******************* Transform contact ***********************/
  $("#toggleCform").on("click", function(e) {
    e.preventDefault();
    $(".contactform").toggleClass("toggle");
    $(".anfahrt").toggleClass("toggle");
    $(".googlemap-overlay").animate({
      opacity : 0
    }, 1000, function() {
      $(this).css("display", "none");
      $(".mapclose").css("display", "block").animate({
	"top" : "13px",
	"opacity" : "1"
      }, 500);
      $(".burgerBun").animate({"opacity" : 0}, 500, function() {
	$(this).css("display", "none");
	$(".arrow-up").css("display", "none");
      });
    });
  });

  $(".mapclose").on("click", function(e) {
    e.preventDefault();
    $(".googlemap-overlay").css("display", "block").animate({
      opacity : 1
    }, 500, function() {
      $(".contactform").toggleClass("toggle");
      $(".anfahrt").toggleClass("toggle");
    });
    $(".mapclose").animate({
      "opacity" : "0",
      "top" : "-100"
    }, 500).css("display", "none");
    $(".burgerBun").css("display", "block").animate({
      "opacity" : "0.8"
    }, 500);
    $(".arrow-up").css("display", "block");
  });

  /***************** Transform contact END ********************/



});

/*************** on scroll ************************/

$(window).scroll(function() {
  var sT = $(document).scrollTop();

  
  if(sT >= $("#info").offset().top) {
    $(".burgerMenu span").css("background", "#333");
  }
  else {
    $(".burgerMenu span").css("background", "#fff");
  }
  if(sT >= $("#oeffnungszeiten").offset().top) {
    $(".burgerMenu span").css("background", "#fff");
  }
  if(sT >= $("#news").offset().top) {
    $(".burgerMenu span").css("background", "#333");
  }
  if(sT >= $("#contact").offset().top - 1) {
    $(".burgerMenu span").css("background", "#fff");
  }

  if(window.innerWidth > 800) {
    $(".busgreybg").css("bottom", -89 + sT/3 + "px");
    $(".inhbg").css("bottom", -55 + sT/2 + "px");
    //$(".logo").css("margin-top",  sT/20 + "px");
  
    if(sT >= $("#oeffnungszeiten").offset().top) {
      $("#oeffnungszeiten").css("background-attachment", "fixed");
    }
    else {
      $("#oeffnungszeiten").css("background-attachment", "scroll");
    }
  
    if(sT >= $("#oeffnungszeiten2").offset().top) {
      $("#oeffnungszeiten2").css("background-attachment", "scroll");
    }
    else {
      $("#oeffnungszeiten2").css("background-attachment", "fixed");
    }
  
    if(sT >= $("#info").offset().top) {
      $(".arrow-up").css("display", "block").animate({"opacity" : .5}, 500);
    }
    else {
      $(".arrow-up").css({"display" : "none", "opacity" : 0});
    }
  }

});

/************** on scroll end ***************/

/******* Scale gallery images ***********/

$(window).resize(function() {
  var mywidth = $(".item1").width();
  $(".gallery-item").css("height", mywidth * 0.618);
  /*$(".burgerBun").html(window.innerWidth);*/
});

/********* Scale gallery images END *************/


/* Scale images in gallery */
var mywidth = $(".item1").width();
$(".gallery-item").css("height", mywidth * 0.618);

/*********** INTRO ****************/
/* Detect Internet Explorer */

var agent = navigator.userAgent;
var regex = /MSIE/;
matches = agent.match(regex);
var isIE = false;

var restrident = agent.match('Trident');
var resEdge = agent.match('Edge');
if(restrident == 'Trident') {
  isIE = true;  
}
if(resEdge == 'Edge') {
  isIE = true;
}

if(matches != null) {
  isIE = true;
}


var paths = $('path:not(defs path)');
paths.each(function(i, e) {
  e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
});
var tl = new TimelineMax();

setTimeout(function() {
  $(".loading").animate({opacity: "0", top : "-100%"}, 500, function() {
    $(this).css("display", "none");
  });
}, 4500);

if(isIE) {
  $("svg").remove();
  $(".logo-wrapper").append('<img src="img/logo.png" class="logo">');
  setTimeout(function() {
    $(".inhbg").toggleClass("toggle"); 
    $(".busgreybg").toggleClass("toggle");
  }, 5000);
}
else {
  setTimeout(function() { 
    tl.add([
      TweenLite.to(paths.eq(0), 1, {strokeDashoffset: 0, delay: 0.5}),
      TweenLite.to(paths.eq(1), 1, {strokeDashoffset: 0, delay: 1.0}),
      TweenLite.to(paths.eq(2), 2.0, {strokeDashoffset: 0, delay: 1.5}),
      TweenLite.to(paths.eq(3), 0.5, {strokeDashoffset: 0, delay: 3.0}),
      TweenLite.to(paths.eq(4), 0.7, {strokeDashoffset: 0, delay: 3.4}),
      TweenLite.to(paths.eq(5), 1, {strokeDashoffset: 0, delay: 4.1}),
      TweenLite.to(paths.eq(6), 0.5, {strokeDashoffset: 0, delay: 5.1}),
      TweenLite.to(paths.eq(7), 1, {strokeDashoffset: 0, delay: 5.6}),
      TweenLite.to(paths.eq(8), 1.5, {strokeDashoffset: 0, delay: 5.6}),
    ]);
  }, 5000);
  setTimeout(function() {
    $(".inhbg").toggleClass("toggle"); 
    $(".busgreybg").toggleClass("toggle");
  },11000);
}
/**********  INTRO END **************/
