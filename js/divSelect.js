// JavaScript Document
jQuery.divselect = function(textword,droplist,changetext) {
        textword.click(function(e){
        if(droplist.css("display")=="none"){
           droplist.slideDown("fast");
        }else{
            droplist.slideUp("fast");
        }
		e.stopPropagation();
    });
    	changetext.click(function(){
        var txt = $(this).text();
        textword.html(txt);
        droplist.hide();
    });
		$(document).click(function(){
		droplist.hide();
	});
};
//调用方式
/*<script>
$(function(){
    $.divselect(textword,droplist,changetext);
});
</script>*/
