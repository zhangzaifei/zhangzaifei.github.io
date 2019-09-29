$(document).ready(function(){
	
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
	
});