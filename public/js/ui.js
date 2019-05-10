$(document).ready(function(){

	$(".desktop_aside_menu, .desktop_aside_menu_w").click(function(){
	     $('.desktop_aside').delay(200).toggleClass("hamburg-open");
	     $('.bk_bg').toggleClass("bk_bg_show");
	     $(this).delay(200).toggleClass("cross");
	    });

	 $(".bk_bg").click(function(){
	     $(this).removeClass("bk_bg_show");
	     $('.desktop_aside').removeClass("hamburg-open");
	     $(".desktop_aside_menu").removeClass("cross");
	     $(".desktop_aside_menu_w").removeClass("cross");
	    });




	$("#go_01").click(function() {
		return $.scrollTo("#about_description", 300), !1
	})
	$("#go_02").click(function() {
		return $.scrollTo("#partners", 300), !1
	})
	$("#go_03").click(function() {
		return $.scrollTo("#awards", 300), !1
	})
	$("#go_04").click(function() {
		return $.scrollTo("#members", 300), !1
	})


});






