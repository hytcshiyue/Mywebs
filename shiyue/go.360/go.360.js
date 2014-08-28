$(function(){
	$(".nav li").hover(function(){

		
		setInterval("dd()",500);
		//setInterval("ee()",1000);
		//$(".holiday i").css({"background-position":"0 -457px"});
		//$(".holiday i").css({"background-position":"-25px -457px"});
		//setTimeout("",1000);
		//$(".holiday i").css({"background-position":"0 -457px"});
		
	});
});

function dd(){
	$(".holiday i").css({"background-position":"-25px -457px"});
}
function ee(){
	$(".holiday i").css({"background-position":"0 -457px"});
}
