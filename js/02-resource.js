$(document).ready(function () {
	
	/* 顶部导航列表鼠标移入颜色变化 */
	$('.header-nav ul li a').mouseenter(function(){
		$(this).css("color","#CCFF33");
	}).mouseleave(function(){
		$(this).css("color","#000000");
	});
	
	/* 导航栏下边框点击跟随 */
	$('.header-nav ul li').click(function(){
		$(this).addClass("header-nav-000");
		/* .not()方法作用是当一组元素被选中时，带有not(指定类名)的元素不会被选中，剩下的全部会被选中 */
		$('.header-nav ul li').not(this).removeClass("header-nav-000");
	});
	
	/* 点击登陆按钮切换主体 */
	$('.header-Login div:nth-child(2)').click(function(){
		$('.content-Container').css({"display":"none"});
		$('.Landing-Container').css({"display":"block"});
	});
	
	
	/* 中部导航栏 */
	$('.content-top1 ul li').click(function(){
		console.log($(this).index());
		var i = $(this).index();
		if(i === 0){
			$('.content-top2').css({"display":"block"});
			$('.content-top000').not('.content-top2').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 1){
			$('.content-top3').css({"display":"block"});
			$('.content-top000').not('.content-top3').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 2){
			$('.content-top4').css({"display":"block"});
			$('.content-top000').not('.content-top4').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 3){
			$('.content-top5').css({"display":"block"});
			$('.content-top000').not('.content-top5').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 4){
			$('.content-top6').css({"display":"block"});
			$('.content-top000').not('.content-top6').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 5){
			$('.content-top7').css({"display":"block"});
			$('.content-top000').not('.content-top7').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 6){
			$('.content-top8').css({"display":"block"});
			$('.content-top000').not('.content-top8').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 7){
			$('.content-top9').css({"display":"block"});
			$('.content-top000').not('.content-top9').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 8){
			$('.content-top10').css({"display":"block"});
			$('.content-top000').not('.content-top10').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 9){
			$('.content-top11').css({"display":"block"});
			$('.content-top000').not('.content-top11').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 10){
			$('.content-top12').css({"display":"block"});
			$('.content-top000').not('.content-top12').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 11){
			$('.content-top13').css({"display":"block"});
			$('.content-top000').not('.content-top13').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		} else if(i === 12){
			$('.content-top14').css({"display":"block"});
			$('.content-top000').not('.content-top14').css({"display":"none"});
			$(this).css({"color":"#52CB6B"});
			$('.content-top1 ul li').not(this).css({"color":"#000"});
		}
	});
	
	
	
	
	
	/* 主体内容阴影效果 */
	$('.top2-Mother div').mouseenter(function(){
		$(this).css({"box-shadow":"rgba(0,0,0,0.4) 0 0 15px"})
	}).mouseleave(function(){
		$(this).css({"box-shadow":"none"})
	}); 
	
})