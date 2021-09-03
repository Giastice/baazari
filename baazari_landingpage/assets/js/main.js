$(document).ready(function(){
	 /* Set Navigation transparent */
	 $(window).scroll(function(){
        if($(window).scrollTop() > 106 ){
            $(".navbar-default").css({"background":"rgba(255,255,255,0.8)"});
        }else if($(window).scrollTop() < 106){
        	$(".navbar-default").css({"background":"rgba(255,255,255,1.0)"});
        }
    });
	
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top -50 }, 500);
        return false;
      }
    }
  });
});


new WOW().init();