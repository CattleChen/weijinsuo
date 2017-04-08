$(function(){
//	$('#AAA > .nav > li').each(function(i){
//		$(this).mousemove(function(){
//			$('#AAA > .nav > li').removeClass();
//			$(this).addClass('active');
//		});
//		$(this).mouseout(function(){
//			$('#AAA > .nav > li').removeClass();
//		})
//	})
	
	//屏幕变化时，来触发函数
	
	function resize (){
		var windowWidth=$(window).width();
		var isSmallScreen = windowWidth < 768 ;
	
		$('#BBB > .carousel-inner > .item').each(function(i,item){
			
			var $item=$(item);
			
			var imgSrc=$item.data(isSmallScreen?'image-sm':'image-lg');
			
			$item.css('backgroundImage','url("' + imgSrc + '")');
			
			if(isSmallScreen){
				$item.html('<img src="'+ imgSrc +'" alt=""/>');
			}else{
				$item.empty();
			}
		});
	}
	
	$(window).on('resize',resize).trigger('resize');
	
//	初始化tooltips插件
	
	$('[data-toggle="tooltip"]').tooltip();
	
	//给账单的导航栏添加计算宽度
	
	var width=30;  //因为初始ul有paddin-left的宽度；
	
	//console.log($('.nav-tabs').children());
	$('.nav-tabs').children().each(function(i,elem){
		width+=elem.clientWidth;
		
	})
	
	if(width > $(window).width()){
		$('.nav-tabs').css('width',width).parent().css('overflow-x','scroll')
		
	}
	
//	新闻列表
	//开始给每个a标签加点击动作
	$('#news .nav-pills a').on('click',function(){
		//获取你点击的那个a标签的title值
		var title=$(this).data('title');
		//把这个title值赋给上面的title标签显示出来
		$('.news-title').text(title);
	})
		
	var startX=0;
	var endX=0;
//	手指放上去获取手指的横坐标
	$('.carousel').on('touchstart',function(e){
		startX = e.originalEvent.touches[0].clientX;
		//console.log(startX);
	})
	$('.carousel').on('touchmove',function(e){
		endX=e.originalEvent.touches[0].clientX;
		//console.log(endX);
	})
	$('.carousel').on('touchend',function(e){
		var dis = endX - startX;
		console.log(dis);
		//console.log(dis>0?'向右':'向左')
		if(Math.abs(dis) > 50){
			
			$(this).carousel(dis>0?'prev':'next');
		}
		
	})
});
