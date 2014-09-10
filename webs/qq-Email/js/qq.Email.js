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
// 星标邮件
$(".fg").click(function(){

  
   $(this).parent().find(".fg1").show();
});
$(".fg1").click(function(){

   $(this).parent().find(".fg1").hide();
});



// $("input[type='checkbox']").prop("checked");
// $("input[type='checkbox']").prop("disabled", false);
// $("input[type='checkbox']").prop("checked", true);
  //全选
  $("#ch1").click(function(){
  var ifo=$(this).attr("isch");
  if(ifo=="no"){
     $(".choice").each(function(){
        $(this).prop("checked",true);
      });
   $(this).attr("isch","yes");
  }
  else{
    $(".choice").each(function(){
      $(this).prop("checked",false);
    });
    $(this).attr("isch","no");
  }
});
//删除选中邮件
  $(".dele").click(function(){
    $(".choice").each(function(){
      if($(this).is(':checked')==true){
        $(this).parent().parent().parent().hide();
      }
    });
  });

  //标记已读邮件
  $(".yidu").click(function(){
 
    $(".choice").each(function(){
        if($(this).is(':checked')==true)
        {
          $(this).parent().parent().next().children().css("background-position","-48px -16px");
        // $(this).parent().parent().parent().find(".xinxi").css("background-position","-48px -16px");
          $(this).prop("checked",false);
        }

    });
  return false;
  });

});


//$(".choice").each(function(){
//   if($(this).is(':checked')==true){

//   }
//   $(this).prop("checked",false);
// });

