$(function(){
	//菜单栏动画
	$(".nav li").hover(function(){
		$(this).find(".holiday i").css({"-webkit-animation":"loops 1s infinite"});
	},function(){
		$(this).find(".holiday i").css({"-webkit-animation":"none"});
	});
	$(".nav li").hover(function(){
		$(this).find(".flight i").css({"-webkit-animation":"loops1 0.9s infinite"});
	},function(){
		$(this).find(".flight i").css({"-webkit-animation":"none"});
	});
	$(".nav li").hover(function(){
		$(this).find(".hotel i").css({"-webkit-animation":"loops2 1s infinite"});
	},function(){
		$(this).find(".hotel i").css({"-webkit-animation":"none"});
	});
	$(".nav li").hover(function(){
		$(this).find(".train i").css({"-webkit-animation":"loops3 1s infinite"});
	},function(){
		$(this).find(".train i").css({"-webkit-animation":"none"});
	});
	$(".nav li").hover(function(){
		$(this).find(".tuan i").css({"-webkit-animation":"loops4 1s infinite"});
	},function(){
		$(this).find(".tuan i").css({"-webkit-animation":"none"});
	});
	$(".nav li").hover(function(){
		$(this).find(".tripmap i").css({"-webkit-animation":"loops5 1s infinite"});
	},function(){
		$(this).find(".tripmap i").css({"-webkit-animation":"none"});
	});
	$(".nav li").hover(function(){
		$(this).find(".website i").css({"-webkit-animation":"loops6 1s infinite"});
	},function(){
		$(this).find(".website i").css({"-webkit-animation":"none"});
	});
// 广告动画
	$(".flashcontrol").click(function(){
		currIndex=$(this).attr("picIndex");
  		showFlashImage();
	});

	  $("#guanggao").hover(function(){
  		clearInterval(timeHandle);
  		},function(){
  			timeHandle= setInterval("showFlashImage()",2000);
  		});
 		 timeHandle= setInterval("showFlashImage()",2000);



// $(".leftcontrol").click(function(){

// 	$(this).next().next().children().show();
// });
});
var timeHandle;
var currIndex=2;
function showFlashImage(){
	$("#guanggao").css("background-image",'url("images/' + currIndex +'.jpg")');
	$(".flashControl").removeClass("currentspan");
	$("#controlspan"+ currIndex ).addClass("currentspan");
	currIndex++;
	if(currIndex==5){
		currIndex=1;
	}
	
	
}



	



