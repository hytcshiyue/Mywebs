$(function(){

  $(".flashContral").click(function(){

  		currIndex=$(this).attr("picIndex");
  		showFlashImage();

  });
  $("#flash").hover(function(){
  	clearInterval(timeHandle);
  },function(){
  	timeHandle= setInterval("showFlashImage()",1000);
  });
  timeHandle= setInterval("showFlashImage()",1000);
});

var timeHandle;
var currIndex=2;
function showFlashImage(){
	$("#flash").css("background-image",'url("images/' + currIndex +'.jpg")');
	$(".flashContral").removeClass("currentSpan");
	$("#contralSpan"+ currIndex ).addClass("currentSpan");
	currIndex++;
	if(currIndex==5){
		currIndex=1;
	}
	
	
}