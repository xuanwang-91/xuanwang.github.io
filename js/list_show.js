$(function(){
	var articleTitle=new Array();
	articleTitle[0]='全国首列国际冷链运输专列经满洲里口岸出境赴俄';
	articleTitle[1]='冷链物流市场稳步发展 冷藏车需求前景分析';
	
	
	var articleText=new Array();
	articleText[0]='近日，装载近400吨洋葱的齐齐哈尔至莫斯科冷链运输专列经满洲里口岸出境，该趟专列是全国首趟赴俄国际冷链运输专列。据了解……  ';
	articleText[1]='2016年，在政策利好和需求向好的双重作用下，我国冷链物流市场实现稳步发展。数据显示，2016年全国冷链物流市场规模达到2200亿元，同比增长…… ';
	
	var day=new Array();
	day[0]='25';
	day[1]='24';
	
	for(var i=0;i<10;i++){
		$('.articleTitle').eq(i).find('.articleTitleTextUp').text(articleTitle[i%2]+(i+1));
		$('.articleTitle').eq(i).find('.articleTitleTextDown').text(articleText[i%2]);
		$('.articleTitle').eq(i).find('.articleDateDay').text(day[i%2]);
		$('.articleTitle').eq(i).find('.articleDateMY').text('2021-09');
	}
	
	
	
	
	
	// console.log(cur_page);
	// switch(cur_page){
	// 	case 1:
	// 		document.getElementById('Ppage').style.visibility='hidden';
	// 		console.log('第一页隐藏上一页按钮');
	// 		break;
	// 	case 2:
	// 		$('.pageBtn').siblings().removeClass('pageCurrent');
	// 		$('.pageBtn').eq(cur_page).addClass()
	// 		console.log('dsa');break;
	// }
	// 上一页按钮单击
	$('#Ppage').click(function(){
		// console.log('dsad')
		var cur_page=$('.pageCurrent').index();
		console.log('当前页面：',cur_page-1)
		cur_page--;
		$('.pageBtn').removeClass('pageCurrent');
		$('.pageBtn').eq(cur_page-1).addClass('pageCurrent')
		if(cur_page==1){
			document.getElementById('Ppage').style.visibility='hidden';
			console.log('首页隐藏上一页按钮');
		}
		document.getElementById('Npage').style.visibility='visible';
		var refreshPage=(cur_page-1)*10;
		// console.log
		for(var i=0;i<10;i++){
			$('.articleTitle').eq(i).find('.articleTitleTextUp').text(articleTitle[i%2]+(refreshPage+i+1));
			$('.articleTitle').eq(i).find('.articleTitleTextDown').text(articleText[i%2]);
		}
		window.scrollTo(0,300);
		// else if(cur_page==3){
		// 	document.getElementById('Npage').style.visibility='hidden';
		// 	console.log('末页隐藏下一页按钮');
		// }
	})
	//下一页按钮单击
	$('#Npage').click(function(){
		// console.log('dsad')
		var cur_page=$('.pageCurrent').index();
		console.log('当前页面：',cur_page+1)
		cur_page++;
		$('.pageBtn').removeClass('pageCurrent');
		$('.pageBtn').eq(cur_page-1).addClass('pageCurrent')
		// if(cur_page==1){
		// 	document.getElementById('Ppage').style.visibility='hidden';
		// 	console.log('首页隐藏上一页按钮');
		// }
		// else 
		
		document.getElementById('Ppage').style.visibility='visible';
		if(cur_page==3){
			document.getElementById('Npage').style.visibility='hidden';
			console.log('末页隐藏下一页按钮');
		}
		
		var refreshPage=(cur_page-1)*10;
		// console.log
		for(var i=0;i<10;i++){
			$('.articleTitle').eq(i).find('.articleTitleTextUp').text(articleTitle[i%2]+(refreshPage+i+1));
			$('.articleTitle').eq(i).find('.articleTitleTextDown').text(articleText[i%2]);
		}
		window.scrollTo(0,300);
	})
	//跳转按钮单击
	$('#goPage').click(function(){
		var page=document.getElementById('skipPage').value;
		// console.log(page);
		if(page>0 && page<=3){
			
			$('.pageBtn').removeClass('pageCurrent');
			$('.pageBtn').eq(page-1).addClass('pageCurrent')
			document.getElementById('Ppage').style.visibility='visible';
			document.getElementById('Npage').style.visibility='visible';
			if(page==1){
				document.getElementById('Ppage').style.visibility='hidden';
				document.getElementById('Npage').style.visibility='visible';
			}
			if(page==3){
				document.getElementById('Ppage').style.visibility='visible';
				document.getElementById('Npage').style.visibility='hidden';
			}
			
			var refreshPage=(page-1)*10;
			// console.log
			for(var i=0;i<10;i++){
				$('.articleTitle').eq(i).find('.articleTitleTextUp').text(articleTitle[i%2]+(refreshPage+i+1));
				$('.articleTitle').eq(i).find('.articleTitleTextDown').text(articleText[i%2]);
			}
			window.scrollTo(0,300);
		}else{
			window.alert('输入页码不合法')
		}
		document.getElementById('skipPage').value=''
	})
	//直接单击页码
	$('.pageBtn').click(function(){
		var click_page=$(this).index();
		console.log(click_page);
		if(click_page==1){
			document.getElementById('Ppage').style.visibility='hidden';
			document.getElementById('Npage').style.visibility='visible';
		}
		else if(click_page==3){
			document.getElementById('Ppage').style.visibility='visible';
			document.getElementById('Npage').style.visibility='hidden';
		}
		else if(click_page==2){
			document.getElementById('Ppage').style.visibility='visible';
			document.getElementById('Npage').style.visibility='visible';
		}
		$('.pageBtn').removeClass('pageCurrent');
		$('.pageBtn').eq(click_page-1).addClass('pageCurrent')
		var refreshPage=(click_page-1)*10;
		// console.log
		for(var i=0;i<10;i++){
			$('.articleTitle').eq(i).find('.articleTitleTextUp').text(articleTitle[i%2]+(refreshPage+i+1));
			$('.articleTitle').eq(i).find('.articleTitleTextDown').text(articleText[i%2]);
		}
		window.scrollTo(0,300);
	})
})