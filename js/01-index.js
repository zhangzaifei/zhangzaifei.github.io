$(document).ready(function () {
	// 全局函数，获取指定元素组的事件元素下标
	/* function getSub(a){
		a.click(function(){
			console.log($(this).index());
		});
	}; */
	
	// 顶部导航栏文字鼠标移入移出颜色变化
	$('#header-nav-top li a').mouseenter(function(){
		$(this).css("color","#CCFF33");
	}).mouseleave(function(){
		$(this).css("color","#000000");
	});
	
	
	// 实现顶部导航栏下边框点击跟随效果
	$('#header-nav-top li').click(function(){
		$(this).addClass("header-nav-000");
		/* .not()方法作用是当一组元素被选中时，带有not(指定类名)的元素不会被选中，剩下的全部会被选中 */
		$('#header-nav-top li').not(this).removeClass("header-nav-000");
	});
	
	/* 点击登陆按钮切换主体 */
	$('.header-Login div:nth-child(2)').click(function(){
		$('.content-Container').css({"display":"none"});
		$('.Landing-Container').css({"display":"block"});
	});
	
	
	
	// 此函数changeImg作用效果为切换图片
	function changeImg(a){
		// eq()方法作用是遍历，feadIn()方法作用是淡入，fadeOut()方法作用是淡出
		$('.top1-Left-carousel div').eq(a).fadeIn().siblings().fadeOut();
		$('.top1-Left-num li').eq(a).addClass('cur').siblings().removeClass('cur');
	};
	
	// 自动播放功能，定时器设置
	var step = 0;
	changeImg(step);
	var timer = null;
	
	// 将定时器封装成函数
	function autoPlay(){
		timer = setInterval(function(){
			step++;
			if(step === 4){
				step = 0;
			};
			changeImg(step);
		},2000);
	};
	autoPlay();
	
	// 点击左按钮图片回到上一张
	$('.top1-Left-but-prev').click(function(){
		clearInterval(timer);
		step--;
		if(step === -1){
			step = 3;
		}
		changeImg(step);
		// autoPlay();
	});
	// 点击右按钮图片去到下一张
	$('.top1-Left-but-next').click(function(){
		clearInterval(timer);
		step++;
		if(step === 4){
			step = 0;
		};
		changeImg(step);
		// autoPlay();
	});
	// 点击圆点切换到相应的图片
	$('.top1-Left-num li').click(function(){
		clearInterval(timer);
		step = $(this).index();
		changeImg(step);
		// autoPlay();
	});
	
	$('.top1-Left').mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
		autoPlay();
	});
	
	
	
	
    /*添加鼠标移入事件，控制轮播图两侧按钮的显示隐藏*/
    $("#top1-Left-ID").mouseenter(function () {
        $("#top1-Left-but-ID").css({"display":"inline-block"});
    });
    $("#top1-Left-ID").mouseleave(function () {
        $("#top1-Left-but-ID").css({"display":"none"});
    });
	
	
	/* 中部导航栏点击边框跟随效果 */
	$('#top2-top-ID-000 li').click(function() {
		// console.log($(this).index());
		$(this).addClass("top2-top-000");
		$('#top2-top-ID-000 li').not(this).removeClass("top2-top-000");
	});
	
	/* 下拉列表效果实现 */
	$('.top2-bottom-a-123 li').mouseenter(function(){
		$(this).children('ul').show();
	});
	$('.top2-bottom-a-123 li').mouseleave(function(){
		$(this).children('ul').hide();
	});
	$('.top2-bottom-a-456 li').mouseenter(function(){
		$(this).css({"background-color":"#DDD"});
	}).mouseleave(function(){
		$(this).css({"background-color":"#fff"});
	});

	
	

    /*添加鼠标移入事件，鼠标移入中部内容块，显示阴影效果*/
    $(".top3-01").mouseenter(function () {
        $(this).css({"box-shadow":"rgba(0,0,0,0.4) 0 0 15px"})
    });
    $(".top3-01").mouseleave(function () {
        $(this).css({"box-shadow":"none"})
    });
    $(".top3-02").mouseenter(function () {
        $(this).css({"box-shadow":"rgba(0,0,0,0.4) 0 0 15px"})
    });
    $(".top3-02").mouseleave(function () {
        $(this).css({"box-shadow":"none"})
    });
    $(".top3-03").mouseenter(function () {
        $(this).css({"box-shadow":"rgba(0,0,0,0.4) 0 0 15px"})
    });
    $(".top3-03").mouseleave(function () {
        $(this).css({"box-shadow":"none"})
    });


})