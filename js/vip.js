$(function(){

	$(".sl_b4").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},800);
		return false;
	});
	
	$('.sl_b3').click(function(){
			var $this=$(this),
			href=$this.attr('href'),
			$block=$(href),
			blockOffset=$block.offset();
			
			$('html,body').stop().animate({scrollTop:blockOffset.top},800);
		return false;
		});

		
	
});
