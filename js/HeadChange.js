$(function(){
	$('.CardRow').hide();
	//控制导航栏鼠标移动变色
	$('.userbar-li').hover(function(){
		// $(this).find('a').css('color','#ffffff');
		$(this).find('a').stop(true,false).animate({
			'color':'#ffffff',
			'background-color':'rgb(3, 102, 214,0.3)'
		},400)
	})
	$('.userbar-li').mouseleave(function(){
		
		$(this).find('a').stop(true,false).animate({
			'background-color':'#ffffff',
			'color':'#000'
		},800);
	})
})