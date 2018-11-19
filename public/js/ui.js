$(document).ready(function(){

	$(".desktop_aside_menu").click(function(){
	     $('.desktop_aside').delay(200).toggleClass("hamburg-open");
	     $('.bk_bg').toggleClass("bk_bg_show");
	     $(this).delay(200).toggleClass("cross");
	    });

	 $(".bk_bg").click(function(){
	     $(this).removeClass("bk_bg_show");
	     $('.desktop_aside').removeClass("hamburg-open");
	     $(".desktop_aside_menu").removeClass("cross");
	    });





	    


});






