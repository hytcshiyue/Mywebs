$(function(){

  $(".flashContral").click(function(){

  		currIndex=$(this).attr("picIndex");
  		showFlashImage();

  });
  $("#flash").hover(function(){
  	clearInterval(timeHandle);
  },function(){
  	timeHandle= setInterval("showFlashImage()",2000);
  });
  timeHandle= setInterval("showFlashImage()",2000);

//应用框的出现

  $(".yingyong").click(function(){
    $(".yingyongContent").show();   
    $(".yingyong").css({"background-color":"#fff","border-bottom":"0px"});  
    return false;//关键是这里，阻止冒泡
    });
  $(".yingyongContent").click(function(){
    return false;
    });
  $(document).click(function(){
    $(".yingyongContent").hide();
      $(".yingyong").css("background-color",""); 
    });
 //"时悦"下面晃出下拉框
 $(".shiyue").mouseover(function(){
     $(".geren").show(); 
});
  $(".shiyue").mouseout(function(){
     $(".geren").hide(); 
});
  //搜索框下面的选择框
   $(".tubiaoA").click(function(){
    $(".smartBox").show();   
    return false;//关键是这里，阻止冒泡
    });
  $(".smartBox").click(function(){
    return false;
    });
  $(document).click(function(){
    $(".smartBox").hide(); 
    });
  //修改头像
  $(".MyPic").mouseover(function(){
     $(".changePic").show(); 
});
  $(".MyPic").mouseout(function(){
     $(".changePic").hide(); 
});
  //点一串小图标会出现窗口
   $(".medalBox1").mouseover(function(){
     $(".q1").show(); 
    });
    $(".medalBox1").mouseout(function(){
     $(".q1").hide(); 
   });
    $(".medalBox2").mouseover(function(){
     $(".q2").show(); 
    });
    $(".medalBox2").mouseout(function(){
     $(".q2").hide(); 
   });
    $(".medalBox3").mouseover(function(){
     $(".q3").show(); 
    });
    $(".medalBox3").mouseout(function(){
     $(".q3").hide(); 
   });
    $(".medalBox4").mouseover(function(){
     $(".q4").show(); 
    });
    $(".medalBox4").mouseout(function(){
     $(".q4").hide(); 
   });
    $(".medalBox5").mouseover(function(){
     $(".q5").show(); 
    });
    $(".medalBox5").mouseout(function(){
     $(".q5").hide(); 
   });
    $(".medalBox6").mouseover(function(){
     $(".q6").show(); 
    });
    $(".medalBox6").mouseout(function(){
     $(".q6").hide(); 
   });
    $(".medalBox7").mouseover(function(){
     $(".q7").show(); 
    });
    $(".medalBox7").mouseout(function(){
     $(".q7").hide(); 
   });
//推荐收听部分
$().hover()
//评论框的弹出和关闭
  $(".pinglun").click(function(){


   $(".pinglunText").show();
  });
  $(".close").click(function(){


   $(".pinglunText").hide();
  });

});

var timeHandle;
var currIndex=2;
function showFlashImage(){
	$("#flash").css("background-image",'url("images/' + currIndex +'.png")');
	$(".flashContral").removeClass("currentSpan");
	$("#contralSpan"+ currIndex ).addClass("currentSpan");
	currIndex++;
	if(currIndex==4){
		currIndex=1;
	}
	
	
}