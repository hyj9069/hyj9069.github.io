window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
 
var page = 1;
 
var lastPage = $("section").length;
 
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});

$(function () {
  $('.btn_search_open').click(function () {
    $('.search_wrap').show()
  })
  $('.btn_search_close').click(function () {
    $('.search_wrap').hide()
  })
  $('.btn_allmenu_open').click(function () {
    $('.allmenu_wrap').show(),
    $('body').css("overflow","hidden")
  })
  $('.btn_allmenu_open').click(function () {
    $('.dep2_wrap').show()
  })
  $('.btn_allmenu_open').click(function () {
    $('.dep2').show()
  })

})



