$(function(){

	
    $(".choice-register").hover(function(){
    	$(".register-form").show();
    	$(".login-form").hide();

    });

$(".choice-login").hover(function(){
    	$(".login-form").show();
    	$(".register-form").hide();
    });

$(".choice-register").hover(function(){
	$(this).css("background-color","rgb(46,115,190)");

},function(){

	$(this).css("background-color","");
});
$(".choice-login").hover(function(){
	$(this).css("background-color","rgb(46,115,190)");

},function(){

	$(this).css("background-color","");
    $(".choice-register").css("background-color","");
});

$(".link_notice").click(function(){ 
        showImage();
    });
});

var index=2;
function showImage(){
        $(".image_code").css("backgroundImage",'url("images/imgcode ('+index+').do")');
        
        index++;                           
        if( index==6){
            index=1;
        }
    }