$(function(){

  $(".flashContral").click(function(){

  		currIndex=$(this).attr("picIndex");
  		showFlashImage();

  });
  $("#guanggaoPic").hover(function(){
  	clearInterval(timeHandle);
  },function(){
  	timeHandle= setInterval("showFlashImage()",1000);
  });
  timeHandle= setInterval("showFlashImage()",1000);


$(".product_item").hover(function(){
   $(this).css("border","1px solid #a34f1d");
  	$(this).find(".info").show();

  },function(){
  	$(this).find(".info").hide();
    $(this).css("border","");
  });


$(".pic23").click(function(){
  $(this).prev().find(".listcont1").show();//往返前一个网页
 $(this).prev().find(".listcont").hide();
 $(this).css("background-position","-36px -787px");
  $(".pic21").css("background-position","-64px -787px");
});

$(".pic21").click(function(){

  $(this).next().find(".listcont1").hide();
  $(this).next().find(".listcont").show();
  $(this).css("background-position","0px -787px");
   $(".pic23").css("background-position","-96px -787px");

});
  



});

var timeHandle;
var currIndex=2;
function showFlashImage(){
	$("#guanggaoPic").css("background-image",'url("images/' + currIndex +'.jpg")');
	$(".flashContral").removeClass("currentSpan");
	$("#contralSpan"+ currIndex ).addClass("currentSpan");
	currIndex++;
	if(currIndex==6){
		currIndex=1;
	}
	 
	
}