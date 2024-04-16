$(function () {
  let header = $("#header");
  let nav = $("nav");
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

  let preScrollTop = 0;
  $(window).scroll(function () {
    let nowScrollTop = $(window).scrollTop();
    console.log("now : ", nowScrollTop);
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
  let aboutList = new Swiper(".about_list", {
    // freeMode: true,
    // watchSlidesProgress: true,
  });

  let ww = $(window).width();
  let aboutSwiper;
  let collecSwiper;

  responsiveSwiper();
  initSwiperShop(".shop");

  $(window).on("resize", function () {
    ww = $(window).width();
    responsiveSwiper();
    initSwiperShop(".shop");
  });

  let listOn = $(".about_list ul li.on");

  $(".about_list li").each((index, item) => {
    $(item).mouseover(function () {
      listOn.removeClass("on");
      // aboutSwiper의 해당 인덱스로 슬라이드 이동
      aboutSwiper.slideTo(index);
      $(item).addClass("on").siblings().removeClass("on");
      //js 버전
      // $('.about_list li').forEach((item2, index2) => {
      //   if (index2!== index) {
      //     item2.classList.remove('on');
      //   }
      // });
    });
  });

  function responsiveSwiper() {
    if (ww <= 1279) {
      // 페이드 효과
      initSwiper("slide");
      if (typeof collecSwiper !== "undefined") {
        collecSwiper.destroy();
      }
      // collecSwiper = undefined;
      $(".swiper.collection ul").addClass("swiper-wrapper");
      $(".swiper.collection ul li").addClass("swiper-slide");
      collecSwiper = new Swiper(".swiper.collection", {
        //스크롤바
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    } else if (ww > 1279) {
      // 슬라이드 효과
      initSwiper("fade");
      if (typeof collecSwiper !== "undefined") {
        collecSwiper.destroy();
      }
      $(".swiper.collection ul").removeClass("swiper-wrapper");
      $(".swiper.collection ul li").removeClass("swiper-slide");
    }
  }
  // .about swiper
  function initSwiper(effect) {
    let scrollbarValue = ww > 768 ? undefined : { el: ".swiper-scrollbar" };
    if (typeof aboutSwiper == "object") aboutSwiper.destroy();
    aboutSwiper = new Swiper(".about", {
      fadeEffect: { crossFade: true }, //겹침현상 해결
      speed: 1200,
      // thumbs: { 연결 시 클릭했을 때 슬라이드 적용
      //   swiper: aboutList,
      // },
      // direction: 'horizontal',
      effect: effect,
      scrollbar: { scrollbarValue },
    });
  }

  function initSwiperShop(selector) {
    let slidesPerViewValue = ww > 1279 ? 4 : 1.2;

    new Swiper(selector, {
      loop: true,
      // autoplay: {
      //     delay: 2000,
      // },
      centeredSlides: true,
      grabCursor: true,
      slidesPerView: slidesPerViewValue,
      spaceBetween: 20,
    });
  }
});
