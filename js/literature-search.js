/*!
 * Date: 2015-11-12
 */
function literatureSearch()
{
	//填充时间下拉列表时间
	var start = 1980; // 指定开始年份
	var end = new Date().getFullYear(); // 获取当前年份
	for(i=start;i<=end;i++){
		$(".fromlist").append("<li>"+i+"年</li>");
		$(".tolist .ndy").after("<li>"+i+"年</li>");
	}
	
		
	//下拉列表点击事件
	$(".select .item").live("click",function()
	{
		$(".select .itemlist").hide();   
		$(this).siblings(".itemlist").show();
		$(this).parent(".select").css({"z-index":"2000"});//ie6、7修正
		$(this).parents(".selectwrap").css({"z-index":"1000"});//ie6、7修正
	});
	
	//全文、主题、篇名等鼠标经过事件
	$(".select .itemlist").live("mouseover",function()
	{
		$(this).show();
		$(this).parent(".select").css({"z-index":"2000"});
		$(this).parents(".selectwrap").css({"z-index":"1000"})}).live("mouseout",function()
		{
			$(this).hide();
			$(this).parent(".select").css({"z-index":"1001"});
			$(this).parents(".selectwrap").css({"z-index":"1001"});
		});
	
		//全文、主题、篇名等鼠标经过加深背景
		$(".select .itemlist li").live("mouseover",function()
		{
			$(this).addClass("gray");	
			
		}).live("mouseout",function()
			{
				$(this).removeClass("gray");
			});
		
		//全文、主题、篇名等列表点击事件
		$(".select .itemlist li").live("click",function()
		{
			var Text=$(this).text();
			$(this).parent(".select .itemlist").siblings(".item").text(Text);	
			$(this).parent(".select .itemlist").hide();
			$(this).parent(".select").css({"z-index":"1011"});
			$(this).parents(".selectwrap").css({"z-index":"1011"});
			$(this).parent(".select .itemlist").removeClass("itemlistspec");
			$(this).parents(".select").removeClass("selectspec");
			$(this).parent().siblings("input").css({"display":"block"});
			$(this).parent().siblings(".yearwrap").css({"display":"none"});
		});
	
	
		//发表时间点击事件
		$(".select .itemlist .fbsj").live("click",function()
		{
			$(this).parent(".select .itemlist").addClass("itemlistspec");
			$(this).parents(".select").addClass("selectspec");
			$(this).parent().siblings("input").css({"display":"none"});
			$(this).parent().siblings(".yearwrap").css({"display":"block"})
		});





	var yearwarpP=$(".yearwrap .p");
	
	//鼠标经过和离开时间选择下拉列表
	yearwarpP.hover(function(){
		
			$(this).addClass("hoverp");
		
		},function(){
			$(this).removeClass("hoverp");
			});
	
	/*$(".yearwrap .p").live("mouseout",function()
		{
			$(this).removeClass("hoverp");
		})*/
		
		
	//点击下拉列表
	yearwarpP.click(function(){
		
			$(".yearwrap ul").css({"display":"none"});
			$(this).removeClass("clickp");
			$(this).parents(".selectspec").css({"z-index":100});
			$(this).parents(".selectwrap").css({"z-index":10});
			$(this).parent().find("ul").css("display","block");
			
			$(this).addClass("clickp");
		})

		
		//时间鼠标经过和离开效果
		$(".yearwrap ul li").live("mouseover",function()
		{
			$(this).addClass("hover");
		}).live("mouseout",function()
			{
				$(this).removeClass("hover");
			});
		
		//鼠标点击事件效果
		$(".select .yearwrap ul li").live("click",function()
		{
			var Text=$(this).text();
			$(this).parent("ul").siblings(".p").children("b").text(Text);
			$(this).parent("ul").hide();
			$(".select .itemlist").removeClass("itemlistspec");
		});	
		
		//鼠标离开时间下拉列表效果
		$(".select .yearwrap ul").hover(function(){
				$(this).css({"display":"block"});
			},function(){
				$(this).css({"display":"none"});
				$(this).siblings(".p").removeClass("clickp");
			})

	//点击鼠标下拉框收起			
	/*$("body").click(function()
	{
		$(".select ul").hide();
		$(".select").css({"z-index":"101"});
		$(".selectwrap").css({"z-index":"101"});
		$(".yearwrap .p").removeClass("clickp");
	})*/

}