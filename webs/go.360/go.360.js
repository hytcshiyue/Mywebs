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


	$(".holiday ").mouseover(function(){
		$(".nav-holiday").show();
	});
	$(".holiday ").mouseout(function(){
		$(".nav-holiday").hide();
		// $(".nav-holiday").webkit-animation({"height":"2000px"});
	});
	
	$(".hotel ").hover(function(){
		$(".nav-hotel").show();
	},function(){
		$(".nav-hotel").hide();
	});
	$(".train ").hover(function(){
		$(".nav-train").show();
	},function(){
		$(".nav-train").hide();
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

// 更换城市机票
$(".beijing").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".hangzhou").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".xiamen").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".kunming").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".guangzhou").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".shenzhen").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".chengdu").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".chongqing").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});
$(".guilin").click(function(){
	$(".NavS").removeClass("changeColor");
	$(this).addClass("changeColor");
});

$(".leftcontrol").click(function(){
       
  		showFlashImage1();
	
});
$(".rightcontrol").click(function(){
       
       alert("sd");
  		showFlashImage2();
});
	
});

var timeHandle;
var currIndex=2;
function showFlashImage()
{
	$("#guanggao").css("background-image",'url("images/' + currIndex +'.jpg")');
	$(".flashcontrol").removeClass("currentspan");
	$("#controlspan"+ currIndex ).addClass("currentspan");
	currIndex++;
	if(currIndex==5)
	{
		currIndex=1;
	}
}

var index1=2;
function showImages1(){

	$("#guanggao").css("background-image",'url("images/' + index1 +'.jpg")');
	index1++;
	if(index1==5){
		index1=1
	}
}

var index2=4;
function showImages2(){

	$("#guanggao").css("background-image",'url("images/' + index2 +'.jpg")');
	index1++;
	if(index1==0){
		index1=4
	}
}

	



