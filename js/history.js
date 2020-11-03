
function remember()
{
	
	var history=$(".history").eq(0);
	var time=0;
	var input1=$(".head-fen .search-item .choose .selectwrap .select input").eq(0);
	//打开历史
	input1.click(function()
	{
		history.slideDown(time);
	})
	
	//关闭历史
	$(".cmd .c").click(function()
	{
		history.slideUp(time);
	})
	
	input1.blur(function()
	{
		history.slideUp(time);
	})
	
	
	//鼠标移动到p标签上
	$(".history p").hover(function(){
		$(this).addClass("hover").children(".clear").css("display","block");
		},function(){
			$(this).removeClass("hover").children(".clear").css("display","none");
			});
	
	//删除当条历史记录
	$(".history p .clear").click(function()
	{
		$(this).parent().remove();
	})	
	
}

