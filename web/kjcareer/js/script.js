$(function () {
  $('.center_list .tabs li').click(function() {
    let n = $(this).index();

    $('.center_list .tabs li').not(this).removeClass()
    $(this).addClass('center' + (n + 1))

    $('.business6 .content').hide()
    $('.business6 .content').eq(n).show()
  })

  // $('.business6 .center_btns a').mouseenter(function() {
  //   $(this).removeClass('btn_view')
  // })
  $('.business6 .center_btns .btn_view').hover(function() {
    $(this).removeClass('btn_view')
  },function() {
    $(this).addClass('btn_view')})
})