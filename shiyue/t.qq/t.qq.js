$(function(){

  $(".flashContral").click(function(){

  		currIndex=$(this).attr("picIndex");
  		showFlashImage();

  });
  $("#flash").hover(function(){
  	clearInterval(timeHandle);
  },function(){
  	timeHandle= setInterval("showFlashImage()",2000);
  });
  timeHandle= setInterval("showFlashImage()",2000);

//应用框的出现

  $(".yingyong").click(function(){
    $(".yingyongContent").show();   
    $(".yingyong").css({"background-color":"#fff","border-bottom":"0px"});  
    return false;//关键是这里，阻止冒泡
    });
  $(".yingyongContent").click(function(){
    return false;
    });
  $(document).click(function(){
    $(".yingyongContent").hide();
      $(".yingyong").css("background-color",""); 
    });
 
//评论框的弹出和关闭
  $(".pinglun").click(function(){


   $(".pinglunText").show();
  });
  $(".close").click(function(){


   $(".pinglunText").hide();
  });

});

var timeHandle;
var currIndex=2;
function showFlashImage(){
	$("#flash").css("background-image",'url("images/' + currIndex +'.png")');
	$(".flashContral").removeClass("currentSpan");
	$("#contralSpan"+ currIndex ).addClass("currentSpan");
	currIndex++;
	if(currIndex==4){
		currIndex=1;
	}
	
	
}