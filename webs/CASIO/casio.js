$(function(){

  $(".flashContral").click(function(){

  		currIndex=$(this).attr("picIndex");
  		showFlashImage();

  });
  $("#guanggao").hover(function(){
  	clearInterval(timeHandle);
  }, function(){
  	 timeHandle= setInterval("showFlashImage()",1000);
  });
  timeHandle= setInterval("showFlashImage()",1000);


  // $(".cate1").click(function(){
  //   $(".cateinner").show();
  // });
  // $(document).click(function(){
  //   $(".cateinner").css("dispay","none");
  // });

  // $(".cate1").click(function(){
  //   $(".cateinner").show();     
  //   return false;//关键是这里，阻止冒泡
  //   });
  // $(".cateinner").click(function(){
  //   return false;
  //   });
  // $(document).click(function(){
  //   $(".cateinner").hide();
  //   });
      

  $(".menuLi").hover(function(){

    $(this).find(".watch").next().show();
 
  },function(){
    $(this).find(".watch").next().hide();
    
  });
  $(".subMenu li").hover(function(){
 $(this).css("background-color", "#039");
},function(){
   $(this).css("background-color", "");
}
);
$(".guanzhu").click(function(){
  $(".guanzhu").hide();
  $(".Re-guanzhu").show();
});
$(".Re-guanzhu").click(function(){
  $(".Re-guanzhu").hide();
  $(".guanzhu").show();
});
});


var timeHandle;
var currIndex=2;
function showFlashImage(){
	$("#guanggao").css("background-image",'url("images/' + currIndex +'.jpg")');
	$(".flashContral").removeClass("currentSpan");
	$("#contralSpan"+ currIndex ).addClass("currentSpan");
	currIndex++;
	if(currIndex==4){
		currIndex=1;
	}
	 
	
}