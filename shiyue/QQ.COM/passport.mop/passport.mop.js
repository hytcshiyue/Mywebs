$(function(){

	
    $(".choice-register").click(function(){
        $(".register-form").show();
        $(".login-form").hide();
        $(this).css("background-color","rgb(46,115,190)");
        $(".choice-login").css("background-color","");

    });
$(".choice-login").click(function(){ 
    $(".choice-register").css("background-color","");
    	$(".login-form").show();
    	$(".register-form").hide();
        $(this).css("background-color","rgb(46,115,190)");
       
    });




// $(".choice-login").hover(function(){
	

// },function(){

// 	$(this).css("background-color","");
//     $(".choice-register").css();
// });

$(".link_notice").click(function(){ 
        showImage();
    });
});

var index=2;
function showImage(){
        $(".image_code").css("backgroundImage",'url("images/imgcode ('+index+').png")');
        
        index++;                           
        if( index==5){
            index=1;
        }
    }