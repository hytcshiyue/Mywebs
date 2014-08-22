$(function(){

$(".emailSearch").click(function(){

	$(".xiala").css("background-position","-75px -4px");
});
$(".tubiao").click(function(){

	$(".tubiaoContent").show();
});


  $(".tubiao").click(function(){
    $(".tubiaoContent").show();     
    return false;//关键是这里，阻止冒泡
    });
  $(".tubiaoContent").click(function(){
    return false;
    });
  $(document).click(function(){
    $(".tubiaoContent").hide();
    });

});