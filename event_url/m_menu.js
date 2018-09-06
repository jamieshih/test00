$(function(){
	$(".M_menu_filter_btn").click(function(){
		$(".M_menu_filter,.bk_mask").fadeToggle();
		$(".M_menu_filter").toggleClass("on");
		if($(".M_menu_filter").hasClass("on")) {
            $("html").on("touchmove", function(e) {
	    	e.preventDefault();
		});
        } else  {
            $("html").off("touchmove");
        }
	});
	$(".bk_mask,.M_menu_filter a").click(function(){
		$(".M_menu_filter,.bk_mask").fadeOut();
		$(".M_menu_filter").removeClass("on");
		$("html").off("touchmove");
	});
});
