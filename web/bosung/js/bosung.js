$(document).ready(function () {
  //   window.addEventListener("wheel", function(e){
  //     e.preventDefault();
  //   },{passive : false});

  //   let $html = $("html");
  //   let page = 1;
  //   let lastPage = $("section").length;
  //   $html.animate({scrollTop:0},10)

  //   $(window).on("wheel", function(e) {
  //     if($html.is(":animated")) return;
  //     if(e.originalEvent.deltaY > 0) {
  //         if(page == lastPage+1) return;
  //         page++;
  //     } else if(e.originalEvent.deltaY < 0) {
  //         if(page == 1) return;
  //         page--;
  //     }
  //     var posTop =(page-1) * $(window).height();
  //     $html.animate({scrollTop : posTop});
  // })

  // let preScollTop = 0;
  let shBtn = $(".search");
  let header = $("#header");
  let shBar = $(".shbar");
  let btnHide = $(".search img:first");
  let cloBtn = $(".clo_btn");

  //검색 버튼
  $(shBtn).click(function () {
    header.toggleClass("active");
    shBar.toggleClass("active");
    btnHide.toggleClass("hide");
    cloBtn.toggleClass("active");
  });
  let liAll = $(".lan_wrap ul");
  $(".lan_wrap").click(function () {
    liAll.toggle("show");

    $("#header .util .lan_wrap").toggleClass("down");
  });

  //header 마우스오버
  let nav = $("nav");
  nav.hover(function () {
    header.toggleClass("active");
    header.toggleClass("on");
  });
  let preScrollTop = 0;
  $(window).scroll(function () {
    let nowScrollTop = $(window).scrollTop();
    // console.log("now : ", nowScrollTop);
    if (nowScrollTop > preScrollTop && !header.hasClass("active")) {
      header.addClass("up");
    } else if (nowScrollTop == 0) {
      header.removeAttr("data-bg");
    } else if (nowScrollTop <= preScrollTop && nowScrollTop !== 0) {
      header.removeClass("up");
      header.attr("data-bg", "white");
    }
    preScrollTop = nowScrollTop;

    //sec2
    const docScrollTop = $(document).scrollTop();
    if (docScrollTop >= 220) {
      $(".sec2 .cover").css({ width: "0", transition: "width 1s" });
    } else if (docScrollTop <= 330) {
      $(".sec2 .cover").css({ width: "50%", transition: "width 1s" });
    }

    //sec2-txt
    let sec2Top = $(".sec2").offset().top;
    if (docScrollTop >= (sec2Top * 80) / 100) {
      $(".sec2 .sec2_inner p").css({
        bottom: "50%",
        transform: "translateY(50%)",
        opacity: "1",
      });
    } else if (docScrollTop <= sec2Top) {
      $(".sec2 .sec2_inner p").css({ bottom: "40%", opacity: "0" });
    }
    //sec4,sec5 배경색
    $(".sec5").css({ backgroundColor: "var(--color-main--)" });
    const _scroll = function () {
      let p = (($(window).scrollTop() + $(window).outerHeight() - $(".sec5").offset().top) / $(".sec5").outerHeight()).toFixed(2);
      if (p >= 0.45 && p <= 1) {
        $(".sec4").css({ backgroundColor: "var(--color-main--)" });
        $(".sec4 .swiper-slide p").addClass("color");
        $(".sec4 .swiper-slide span").css({ color: "#fff" });
        $(".sec5").css({ backgroundColor: "var(--color-main--)" });
      } else if (p < 0.5) {
        $(".sec4").css({ backgroundColor: "#f8f8f7" });
        $(".sec4 .swiper-slide p").removeClass("color");
        $(".sec4 .swiper-slide span").css({ color: "#333" });
        $(".sec5").css({ backgroundColor: "#f8f8f7" });
      }
    };
    _scroll();
  });
});
// swiper
//-----main1 swiper
const mySwiper = new Swiper(".swiper.main", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500,
  },
  effect: "fade",
  speed: 2000,
  pagination: {
    el: ".swiper-pagination.main",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.main",
    prevEl: ".swiper-button-prev.main",
  },
});
$(".swiper.main .swiper-slide img").each(function () {
  $(this).css("animation", "imgscale 1s ease forwards");
});
//business
let leLi = $(".business_left li");
const busi_right = new Swiper(".business_right", {
  effect: "fade", // 페이드 효과 사용
  fadeEffect: { crossFade: true }, //겹침현상 해결
  speed: 1200,
});
leLi.each(function (index, item) {
  $(item).click(function () {
    // console.log(index);
    busi_right.slideTo(index);
    $(this).addClass("active").siblings().removeClass("active");
  });
});
// sec4
const sec4Swiper = new Swiper(".newsSwiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next.news",
    prevEl: ".swiper-button-prev.news",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
//sec5
const sec5Swiper = new Swiper(".mediaSwiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next.media",
    prevEl: ".swiper-button-prev.media",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    1279: {
      slidesPerView: 3,
    },
  },
});

// footer-icon
let snsIcon = $("#footer .icon_wrap.y:first-child");
let snsShow = $("#footer .icon_wrap.y img:last-child");
let snsIcon2 = $("#footer .icon_wrap.i:first-child");
let snsShow2 = $("#footer .icon_wrap.i img:last-child");

snsIcon.hover(
  function () {
    snsShow.addClass("show");
  },
  function () {
    snsShow.removeClass("show");
  }
);
snsIcon2.hover(
  function () {
    snsShow2.addClass("show");
  },
  function () {
    snsShow2.removeClass("show");
  }
);

// 사이드메뉴
let v = window.innerHeight;
//
$(".side_nav").hide();
$(".m_side_nav").hide();

//전체 메뉴
const totalMenu = $(".total_menu");
const hide_txt = $(".total_menu .hide_txt");

totalMenu.click(function () {
  $(this).toggleClass("close");
  $("body").toggleClass("open_menu");
  allMenu();
  $(window).on("resize", function () {
    allMenu();
  });

  if (totalMenu.hasClass("close")) {
    hide_txt.text("전체메뉴닫기");
  } else {
    hide_txt.text("전체메뉴보기");
  }
});

function allMenu() {
  let windowWid = $(window).width();
  // console.log("windowwid : ", windowWid);

  if (windowWid > 1280 && totalMenu.hasClass("close")) {
    $(".side_nav").css({ top: "0", display: "flex" }), $(".m_side_nav").css({ display: "none" });
  } else if (windowWid <= 1280 && totalMenu.hasClass("close")) {
    $(".side_nav").css({ display: "none" }), $(".m_side_nav").css({ top: "0", display: "block" });
  } else {
    $(".side_nav").css({ top: -v, display: "none" }), $(".m_side_nav").css({ top: -v, display: "none" });
  }
}
//전체메뉴 모바일
let msideA = $(".m_side_nav .side_dep_wrap>a");
let msideI = $(".side_dep_wrap i");
let msideILength = $(".side_dep_wrap i").length;

let clicked = true;
let rotated = false;
for (let i = 0; i < msideILength; i++) {
  $(".side_dep_wrap")
    .eq(i)
    .click(function () {
      $(".m_side_nav .side_dep2").eq(i).toggle("show");
      if (!rotated) {
        $(this).find("i").css({ transform: "rotate(180deg)" });
        rotated = true;
      } else {
        $(this).find("i").css({ transform: "rotate(0deg)" });
        rotated = false;
      }
    });
}
