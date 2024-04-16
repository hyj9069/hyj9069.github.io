// window.addEventListener("wheel", function(e){
// 	e.preventDefault();
// },{passive : false});

// var $html = $("html");

// var page = 1;

// var lastPage = $("section").length;

// $html.animate({scrollTop:0},10);

// $(window).on("wheel", function(e){

// 	if($html.is(":animated")) return;

// 	if(e.originalEvent.deltaY > 0){
// 		if(page== lastPage) return;

// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		if(page == 1) return;

// 		page--;
// 	}
// 	var posTop = (page-1) * $(window).height();

// 	$html.animate({scrollTop : posTop});

// });

$(function () {
  $(".btn_search_open").click(function () {
    $(".search_wrap").show();
  });
  $(".btn_search_close").click(function () {
    $(".search_wrap").hide();
  });
  $(".btn_allmenu_open").click(function () {
    $(".allmenu_wrap").show(), $("body").css("overflow", "hidden");
  });
  $(".allmenu_clo_btn").click(function () {
    $(".allmenu_wrap").hide(), $("body").css("overflow", "auto");
  });

  new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  $(".btn_top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  let ww = $(window).width();
  // 페이지 로드시 윈도우 크기 확인
  allMenu();

  function allMenu() {
    $(".allmenu_list li").on("click", function () {
      if (ww < 1080) {
        $(this).children(".list").show();
        $(this).siblings().children(".list").hide();
      }
    });
    $(".dep2_wrap ul").on("click", function () {
      if (ww < 1080) {
        $(this).find(".dep3").show();
        $(this).siblings().find(".dep3").hide();
      }
    });
  }

  // 윈도우 크기 변경시 이벤트 처리
  $(window).resize(function () {
    ww = $(window).width();
    allMenu();
    if (ww >= 1080) {
      $(".list").show();
      $(".dep3").show();
    }
  });
});
