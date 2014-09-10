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
    //给图片打勾
    $(".OKK").click(function(){
      $(".OK").hide();
    $(".baifenbi img").css("display","block");
    
    });
//推荐收听部分
$().hover()
// 发微博下面的小标识
$(".MoreBox").click(function(){
    $(".dropBox").show();
    return false;
});
$(".dropBox").click(function(){

  return false;
});
$(document).click(function(){

  $(".dropBox").hide();
});
//评论框的弹出和关闭
  $(".pinglun").click(function(){


   $(".pinglunText").show();
   $(".quanbuText").hide();
   $(".zhuanboText").hide();
  });
  $(".close").click(function(){


   $(".pinglunText").hide();
  });
//转播框的弹出和关闭
  $(".zhuanbo").click(function(){


   $(".zhuanboText").show();
   $(".pinglunText").hide();
   $(".quanbuText").hide();
  });
  $(".close").click(function(){


   $(".zhuanboText").hide();
  });
  // 点收藏
  $(".shoucang").click(function(){

    $(".shoucang").hide();
   $(".quxiaoshoucang").show();
});
   $(".quxiaoshoucang").click(function(){

    $(".quxiaoshoucang").hide();
   $(".shoucang").show();
});
// 点赞
 $(".jia1").click(function(){

    $(".jia1").hide();
   $(".jia").show();
   $(".dianzan").css("background-position","-306px -112px");
});
   $(".jia").click(function(){

    $(".jia").hide();
   $(".jia1").show();
   $(".dianzan").css("background-position","-290px -112px");
});
// 查看全部转播和评论
 $(".quanbuAll").click(function(){

   $(".quanbuText").show();
   $(".pinglunText").hide();
   $(".zhuanboText").hide();


  });
  $(".close").click(function(){


   $(".quanbuText").hide();
  });

$(".tabStyle11").click(function(){
  $(".claerContent11").show();
  $(".TabS ").removeClass("special-border");
  $(this).addClass("special-border");

  $(".claerContent12").hide();
  $(".claerContent13").hide();
});

$(".tabStyle12").click(function(){
  $(".claerContent12").show();
   $(".TabS ").removeClass("special-border");
  $(this).addClass("special-border");

  $(".claerContent13").hide();
  $(".claerContent11").hide();
});

$(".tabStyle13").click(function(){
  $(".claerContent13").show();
  $(".TabS ").removeClass("special-border");
  $(this).addClass("special-border");
  

  $(".claerContent12").hide();
  $(".claerContent11").hide();
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