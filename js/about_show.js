$(function(){
	$('.organBox').hide();
	$('.headImg').hide();
	$('.headImg').slideDown(1000);
	
	//动态区域切换
	// var onleft=true;
	$('.momentTitleBorder').click(function(){
		var x=$(this).index()
		console.log(x);
		$(this).children('.momentTitle').addClass('momentTitleActive');
		$(this).siblings().children('.momentTitle').removeClass('momentTitleActive');
		if(x==1){
			$('.momentContentBox').stop(true,false).animate({
				'left':'-1080px'
			},500);
			// onleft=false;
		}
		else{
			$('.momentContentBox').stop(true,false).animate({
				'left':0
			},500);
			// onleft=true;
		}
		
	})
	
			
	var n4=$(window).scrollTop();
	if(n4>1400){
		$('.organBox').show(800);
	}
	$(window).scroll(function(){
		var loc=$(this).scrollTop();
		// console.log(loc);
		if(loc>1400){
			// for(var i=0;i<10;i=i+2){
			// 	$('.organBox').eq(i).hide()
			// 	$('.organBox').eq(i).show(800);
			// }
			$('.organBox').show(800);
		}else{
			$('.organBox').hide()
		}
	
	})
})