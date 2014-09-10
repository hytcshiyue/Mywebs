$(function(){

	
    $(".choice-register").click(function(){
        $(".register-form").show();
        $(".login-form").hide();
        $(".choicel").removeClass("changecolor");
        $(this).addClass("changecolor");
    });

  $(".choice-login").click(function(){ 
    	$(".login-form").show();
    	$(".register-form").hide();
         $(".choicel").removeClass("changecolor");
        $(this).addClass("changecolor");
   
    });






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