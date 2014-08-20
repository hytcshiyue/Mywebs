$(function(){

	$(".menuLi").hover(function(){
		$(this).find(".menuTitle").css({"background-color":"#333333","color":"#ffffff","border-top-left-radius":"5px","border-top-right-radius":"5px","border":"1px solid #333"});
		$(this).find(".menuTitle").next().show();
	},function(){
		$(this).find(".menuTitle").css({"background-color":"","color":"","border":"0px"});
		$(this).find(".menuTitle").next().hide();
	});

$(".subMenuA").hover(function(){
	$(this).css("background-color","#e5e5e5");
},function(){
	$(this).css("background-color","");
});
});