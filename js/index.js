$(function(){

// 
var hai=$(".hai");
hai.mouseover(function(){
    $(this).addClass("bounceInLeft")
})
// 图片按需加载开始
  var imgs=$('img');
  var array=[];
 imgs.each(function(index){
  var top=$(this).offset().top;
    var height=$(window).height();
    var sTop=$(window).scrollTop();
  array[index]=$(this).attr("src");
  $(this).attr("src","");
  if (top<height+sTop) {
      $(this).attr("src",array[index]);
    };
 })
 $(window).scroll(function(){
  imgs.each(function(index){
    var top=$(this).offset().top;
    var height=$(window).height();
    var sTop=$(window).scrollTop();
    if (top<height+sTop) {
      $(this).attr("src",array[index]);
    };
  })
 })
  // 图片按需加载结束




  // 
	var $btn=$(".btn");
	var aa=0;
	$btn.click(function(){
		aa++;
		$(this).toggleClass("active");
		$(".max-nav").slideToggle(200)
		$(".max-nav").css({display:"block"})
		
	})
    
 var flag=false;
	var bb=false;
  resizewd();
  $(window).resize(resizewd);
   
	function resizewd(){
		var ww=$(window).width();
		var wh=$(window).height();
        
		if (ww>768) {
			$(".max-nav").css({display:"block",height:"100%"});
			if (aa%2==1) {
				if (flag==true) {
				$btn.click()
				flag=false;
			   };
			};
			bb=true;
			
		};
	    if(ww<768){
	    	flag=true;
	    	if (bb==true) {
	    		$(".max-nav").css({display:"none"})
	    		bb=false;
	    	};
			$(".max-nav").css({height:wh-44})
		}
	}
	// 楼层
	 $(".navcons:eq(0)").click(function() {
        //var index = $(this).index(".btn a");
        $("body,html").animate({scrollTop:0},900)


    })
   $(".caocao").click(function(){
    $("body,html").animate({scrollTop:635},900)

   })
    $(".navcons:eq(1)").click(function() {
        //var index = $(this).index(".btn a");
        $("body,html").animate({scrollTop:635},900)
    })
    $(".navcons:eq(2)").click(function() {
        //var index = $(this).index(".btn a");
        $("body,html").animate({scrollTop:1230},900)
    })
    $(".navcons:eq(3)").click(function() {
        //var index = $(this).index(".btn a");
        $("body,html").animate({scrollTop:1845},900)
    })
    $(".navcons:eq(4)").click(function() {
        //var index = $(this).index(".btn a");
        $("body,html").animate({scrollTop:2500},1000)
    })
     

     /*skill  旋转*/
     var flag3=true;
     var inner=$(".inner");
     var c3=$(".c3")
     inner.each(function(index){
     	  this.index=index;
     	  inner.eq(this.index).hover(function(){
                if (flag3==true) {
                	
                	 $(".c3").eq(this.index).css({transform:"rotate(360deg)"})
                       flag3=false;
                }else{
                
                	$(".c3").eq(this.index).css({transform:"rotate(0deg)"})
                       flag3=true;
                }
           },function(){
             
     	  })
     })
   // 网站作品 选项卡
   var b1=$(".de-btn1");
   var b2=$(".de-btn2");
   var b3=$(".de-btn3");
   var b4=$(".de-btn4");
   var all=$(".conss");
   var web=$(".web");
   var games=$(".games");
   var canvas=$(".canvas");
   b1.click(function(){
      all.removeClass('dn')
      all.addClass('db');
   })
   b2.click(function(){
    all.addClass('dn');
    web.removeClass('dn');
    all.removeClass('db');
    web.addClass('db');
    
   })
    b3.click(function(){
    all.addClass('dn');
    games.removeClass('dn')
     all.removeClass('db');
    games.addClass('db');
   
   })
     b4.click(function(){
    all.addClass('dn');
    canvas.removeClass('dn');
     all.removeClass('db');
    canvas.addClass('db')
   
   })
    // 作品飞入网站  
  $(window).scroll(function(){
          var  hao=$(this).scrollTop();
          if (hao>900) {
            // alert(1)
            hai.removeClass('bounceInLeft')
          } if (hao>1700) {
           $(".zuo").addClass('hh');
           $(".you").addClass('rb');
          } if (hao<1000) {
            $(".zuo").removeClass('hh');
           $(".you").removeClass('rb');
          };
  })

})