$(function() {
  $('#gnb .dep2').hide();
  $('#gnb>li').hover(function() {
    $('#gnb .dep2').stop().slideUp();
    $(this).children('ul').stop().slideDown();
  }, function() {
    $('.dep2').stop().slideUp();
  });
 
  $(".showBtn").click(function() {
  $(".hide").show();
  });

  $('.btn_sitemap').click(function() {
    $('h1').toggleClass('on');
    $(this).toggleClass('active'); 
    $('.sitemap').toggle()
  })

  $('.ads .vod_area li').click(function() {
    $('.vod_popup_box').show()
  })
  $('.btn_vod_close').click(function() {
    $('.vod_popup_box').hide()
  })

  $('.vod_select_box button').click(function() {
    $('.year_hide').show();
  })
}) //onload

$(document).mouseup(function (e) {
  var movewrap = $(".hide");
  var movewrap = $(".year_hide");
  if (movewrap.has(e.target).length === 0) {
    movewrap.hide();
  }
});