$(function(){
	var $toggleBtn2 = $(".sel-btn");  //更多按钮
	$(".dl .dd").each(function (i) {  //判断更多按钮是否显示
	    var ul_width = $(this).find("ul").outerWidth();
	    var total_li = 0;
	    $(this).find('li').each(function () {
	        total_li += $(this).outerWidth() + 60;
	    })
	     console.info(total_li+"|"+ul_width);
	    if (total_li > ul_width) {
	        $(this).siblings(".sel-btn").css('visibility', 'visible');
	    }
	});
	$(".sel-btn").click(function(){
	    var ul = $(this).siblings(".dd").find("ul");
	    var h = ul.height();
	    if (h == 30) {
	        ul.css("height", "auto");
	        $(this).find("a").text("收起");
	        $(this).find("i").addClass("up");
	    }
	    else {
	        ul.css("height", "30px");
	        $(this).find("a").text("更多");
	        $(this).find("i").removeClass("up");
	    }		
	})
	//点击更多选项
	var selG = $(".sel-box .dl");
	if (selG.length > 3) {   //根据selector-group的数量，判断show-more按钮是否显示
	    $(".show-more").show();
	} else {
	    $(".show-more").hide();
	}
	var $selectorGroup = $(".sel-box .dl:gt(2)");
	$selectorGroup.hide();
	var $toggleBtn = $("div.show-more span");
	$toggleBtn.click(function () {
	    if ($selectorGroup.is(":visible")) {
	        $(this).find("a").text("更多选项（价格、属性等等）");
	        $(this).find("i").removeClass("up");
	        $selectorGroup.hide();
	    } else {
	        $(this).find("a").text("收起更多选项");
	        $(this).find("i").addClass("up");
	        $selectorGroup.show();
	    }
	    return false;
	});
})