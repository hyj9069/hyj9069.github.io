$(function () {
  let swiper = new Swiper(".swiper.main_visual_wrap", {
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let swiper2 = new Swiper(".swiper.content_slide", {
    slidesPerView: 2,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $(".center_list .tabs li").click(function () {
    let n = $(this).index();

    $(".center_list .tabs li").not(this).removeClass();
    $(this).addClass("center" + (n + 1));

    $(".business6 .content").hide();
    $(".business6 .content").eq(n).show();
  });

  $(".business6 .center_btns .btn_view").hover(
    function () {
      $(this).removeClass("btn_view");
    },
    function () {
      $(this).addClass("btn_view");
    }
  );

  $("nav").hover(
    function () {
      $(".header_inner").addClass("active");
    },
    function () {
      $(".header_inner").removeClass("active");
    }
  );
});
