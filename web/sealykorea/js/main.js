$(function () {
  let header = $("#header");
  let nav = $("nav");
  let preScrollTop = $(window).scrollTop();
  let aboutSwiper;
  let collecSwiper;

  nav.hover(function () {
    header.toggleClass("active");
  });

  $(".aside_wrap").hide();
  $(".btn_allmenu_open").click(() => {
    $(".aside_wrap").show();
    $("body").css("overflow", "hidden");
  });
  $(".btn_aside_clo").click(() => {
    $(".aside_wrap").hide();
    $("body").css("overflow", "visible");
  });

  $(".allmenu_list ul > li").click(function () {
    $(this).toggleClass("active");
  });

  $(window).scroll(function () {
    let nowScrollTop = $(window).scrollTop();
    if (nowScrollTop > preScrollTop && !header.hasClass("active")) {
      header.addClass("up");
    } else if (nowScrollTop == 0) {
      header.removeAttr("data-bg");
    } else if (nowScrollTop <= preScrollTop && nowScrollTop !== 0) {
      header.removeClass("up");
      header.attr("data-bg", "white");
    }
    preScrollTop = nowScrollTop;
  });

  new Swiper(".main_visual", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  responsiveSwiper();
  initSwiperShop(".swiper.shop");

  $(window).on("resize", function () {
    responsiveSwiper();
    initSwiperShop(".swiper.shop");
  });

  $(".about_list ul li").mouseover(function () {
    let index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    aboutSwiper.slideTo(index);
  });

  function responsiveSwiper() {
    let ww = $(window).width();
    if (ww <= 1279) {
      initSwiper("slide");
      $(".collection_list").addClass("swiper-wrapper");
      $(".collection_list>li").addClass("swiper-slide");
      if (collecSwiper) {
        collecSwiper.destroy();
        collecSwiper = undefined;
      }
      collecSwiper = new Swiper(".collection_wrap", {
        slidesPerView: 1,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    } else {
      initSwiper("fade");
      if (collecSwiper) {
        collecSwiper.destroy();
        collecSwiper = undefined;
      }
      $(".collection_list").removeClass("swiper-wrapper");
      $(".collection_list>li").removeClass("swiper-slide");
    }
  }

  function initSwiper(effect) {
    if (aboutSwiper) {
      aboutSwiper.destroy();
      aboutSwiper = undefined;
    }
    aboutSwiper = new Swiper(".about", {
      fadeEffect: { crossFade: true }, //겹침현상 해결
      speed: 1200,
      // html swiper 부분에 thumbsSlider="" 추가
      // thumbs: { 연결 시 클릭했을 때 슬라이드 적용
      // swiper: aboutList,
      // },
      effect: effect,
    });
  }

  function initSwiperShop(selector) {
    let ww = $(window).width(); // responsiveSwiper 함수 내에서 정의된 변수를 여기서 사용
    let slidesPerViewValue = ww > 1279 ? 4 : 1.2;
    new Swiper(selector, {
      loop: true,
      autoplay: true,
      centeredSlides: true,
      grabCursor: true,
      slidesPerView: slidesPerViewValue,
      spaceBetween: 20,
    });
  }
});
