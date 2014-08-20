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
  	$(this).find(".info").show();
  },function(){
  	$(this).find(".info").hide();
  });


$(".pic21").click(function(){
  
  $(this).prev().find(".listcont1").hide();
     $(this).prev().find(".listcont").show();


  

});

$(".pic23").click(function(){
  $(this).prev().find(".listcont1").show();
 $(this).prev().find(".listcont").hide();
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