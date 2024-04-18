$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  // wep-project isotope
  let $grid = $(" .web-proj .content-wrap");
  let hashtag_all = $(".hashtag li");

  $grid.isotope({
    itemSelector: ".item",
  });
  function $isotope_filter(selector) {
    return $grid.isotope({ filter: selector });
  }
  let tab_all = $(".hashtag .all");
  let tab_1 = $(".hashtag .renewal");
  let tab_2 = $(".hashtag .clone");
  let tab_3 = $(".hashtag .responsive");
  let tab_4 = $(".hashtag .gsap");

  tab_all.on("click", function () {
    $isotope_filter(".content-wrap .item");
  });
  tab_1.on("click", function () {
    $isotope_filter(".content-wrap .renewal");
  });
  tab_2.on("click", function () {
    $isotope_filter(".content-wrap .clone");
  });
  tab_3.on("click", function () {
    $isotope_filter(".content-wrap .responsive");
  });
  tab_4.on("click", function () {
    $isotope_filter(".content-wrap .gsap");
  });

  hashtag_all.click(function (e) {
    $(this).addClass("active").siblings().removeClass("active");
  });

  //h2 animation
  const targets = gsap.utils.toArray(".split");
  targets.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "lines, words, chars" });
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;
    chars.forEach((item) => {
      item.classList.add("abhaya");
    });
    words.forEach((item) => {
      item.style.overflow = "hidden";
    });
    let sec2Word = document.querySelectorAll(".word");
    sec2Word.forEach((e) => {
      e.classList.add("cursor-scale");
    });
    let h2Word = document.querySelectorAll("h2 .word");
    h2Word.forEach((e) => {
      e.classList.add("h2-hover");
    });

    gsap.from(chars, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 1,
      ease: "power1.inOut",
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: chars,
        start: "top bottom",
        end: "+=50",
        autoAlpha: 1,
        yPercent: 0,
        scrub: 1,
      },
    });
  });

  //cursor
  let cursor = document.querySelector(".cursor");
  let cursorScale = document.querySelectorAll(".cursor-scale");
  let imgTxt = document.querySelector(".img-cursor-txt");
  let mouseX = 0;
  let mouseY = 0;
  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });
  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  cursorScale.forEach((link) => {
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursor.classList.remove("grow-small");
      cursor.classList.remove("h2-cursor");
      cursor.classList.remove("img-cursor");
      cursor.classList.remove("btn-cursor");
    });
  });
  cursorScale.forEach((link) => {
    link.addEventListener("mousemove", () => {
      cursor.classList.add("grow");

      if (link.classList.contains("small")) {
        cursor.classList.remove("grow");
        cursor.classList.add("grow-small");
      } else if (link.classList.contains("h2-hover")) {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
        cursor.classList.add("h2-cursor");
      } else if (link.classList.contains("img-hover")) {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
        cursor.classList.remove("h2-cursor");
        cursor.classList.add("img-cursor");
      } else if (link.classList.contains("btn-hover")) {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
        cursor.classList.remove("h2-cursor");
        cursor.classList.remove("img-cursor");
        cursor.classList.add("btn-cursor");
      }

      if (cursor.classList.contains("img-cursor")) {
        imgTxt.style.display = "block";
      } else {
        imgTxt.style.display = "none";
      }
    });
  });
  //////////
  ScrollTrigger.matchMedia({
    // 해상도 별 스크롤 트리거 디테일 수정
    // desktop
    "(min-width: 480px)": function () {
      //intro-main 텍스트
      // gsap.from(".intro-main .title span:nth-of-type(odd)", { xPercent: -100 });
      // gsap.from(".intro-main .title span:nth-of-type(even)", { xPercent: 100 });

      const a1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-main .title span:nth-of-type(2)",
          start: "top 30%",
          end: "bottom 40%",
          //빠르게
          ease: "expo.out",
          scrub: 1, //반대로 스크롤 할 때도 애니메이션 반대로 적용할지
        },
      });
      a1.addLabel("a").to(".intro-main .title span:nth-of-type(even)", { xPercent: 100 }, "a").to(".intro-main .title span:nth-of-type(odd)", { xPercent: -100 }, "a");
      a1.scrollTrigger.refresh();
      // intro  main 백그라운드 색상변경
      gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-sec",
          start: "top 80%",
          toggleClass: { targets: ".intro-main", className: "active" },
        },
      });
      // intro sec 백그라운드 색상변경
      gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-sec",
          start: "top 80%",
          toggleClass: { targets: ".intro-sec", className: "active" },
        },
      });
      const about = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top center",
          //부드럽게
          ease: "linear",
        },
      });

      about
        .addLabel("label")
        .to(
          ".img_box",
          {
            // 다른 타겟을 선택하여 시간차로 효과를 주고 싶은 경우
            className: "txt-motion", // 토글할 클래스 이름
          },
          "label"
        ) // 시간 차를 주기 위해 - 값 사용
        .to(
          ".about .content-wrap .txt-slide",
          {
            // 다른 타겟을 선택하여 시간차로 효과를 주고 싶은 경우
            className: "txt-motion", // 토글할 클래스 이름
          },
          "label"
        ) // 시간 차를 주기 위해 - 값 사용
        .to(".about .content-right .slide-wrap", {
          // 다른 타겟을 선택하여 시간차로 효과를 주고 싶은 경우
          className: "txt-motion", // 토글할 클래스 이름
        });
      //project 배경
      gsap.timeline({
        scrollTrigger: {
          trigger: ".projects .toy-content-wrap",
          start: "top bottom",
          end: "bottom 0%",
          toggleClass: { targets: ".projects", className: "active" },
        },
      });
      /////web-proj items////
      const projItems = gsap.utils.toArray(".web-proj .content-wrap .item");
      gsap.set(projItems, {
        opacity: 0,
        yPercent: 30,
        delay: 1,
        // scale: 0.8
      });
      ScrollTrigger.batch(projItems, {
        start: "top 60%",
        onEnter: (batch) => {
          batch.forEach((item, index) => {
            let item_tl = gsap.timeline();
            item_tl.to(item, 1, {
              opacity: 1,
              yPercent: 0,
              delay: index * 0.1,
              ease: "power2.out",
            });
          });
        },
        once: true,
      });

      // toy-text
      const text = ".projects .toy-text";
      gsap.to(text, {
        backgroundSize: "100%",
        scrollTrigger: {
          trigger: ".projects .toy-content-wrap",
          start: "top bottom",
          end: "bottom 80%",
          scrub: true,
        },
      });

      //toy-item animation
      const hide = (item) => {
        gsap.set(item, { autoAlpha: 0 });
      };
      const animateHide = (item) => {
        gsap.to(
          item,
          { autoAlpha: 0, duration: 0.8, ease: "expo", y: 0 }
          // overwrite:'auto'
        );
      };
      const animate = (item) => {
        // let delay = item.dataset.delay;
        gsap.to(
          item,
          { autoAlpha: 1, duration: 0.8, ease: "expo", y: -200 }
          // overwrite:'auto'
        );
      };
      gsap.utils.toArray(".toy-content-wrap .slide-up").forEach((item) => {
        hide(item),
          ScrollTrigger.create({
            onEnter: () => {
              animate(item);
            },
            onEnterBack: () => {
              animateHide(item);
            },
            trigger: item,
            start: "top bottom",
            end: "top bottom",
          });
      });
      // toy-item iframe pop-up
      let toyItem = $(".toy-content-wrap .slide-up");
      let iframe = $(".toy-pop iframe");
      let iframeClo = $(".iframe-wrap button");
      toyItem.click(function () {
        let toyIndex = $(this).index();
        let showIframe = iframe[toyIndex];
        let iframeWrap = $(".iframe-wrap")[toyIndex];
        showIframe.style.opacity = "1";
        iframeWrap.style.display = "block";
      });
      iframeClo.click(function () {
        iframe.css({ opacity: "0" });
        iframeWrap.css({ display: "none" });
      });
      //.goal .txt
      gsap.timeline({
        scrollTrigger: {
          trigger: ".goal",
          start: "top center",
          end: "100% 0%",
          toggleClass: { targets: ".goal .txt-wrap", className: "txt-motion" },
        },
      });
    },
  });

  // main 효과
  let path = anime.path("path");
  // let path = anime.path('.orbit-content path');
  let motionPath = anime({
    targets: ".square",
    easing: "linear",
    translateX: path("x"),
    translateY: path("y"),
    rotate: path("angle"),
    duration: 8000,
    loop: true,
  });
  // 그래픽
  let imgLength = $(".swiper-wrapper #frame").length;
  console.log(imgLength);
  let graphicImg = $(".swiper-wrapper #frame");
  let popUp = $(".pop-up");
  let popImg = $(".pop-up .pop-img");
  let cloBtn = $(".pop-up .close-pop");
  for (let i = 0; i < imgLength; i++) {
    graphicImg[i].addEventListener("click", function () {
      console.log(graphicImg[i]);
      popUp.css("display", "block");
      popImg[i].style.display = "block";
      $("html").addClass("scroll-none");
    });
  }
  cloBtn.on("click", function () {
    popUp.css("display", "none");
    popImg.css("display", "none");
    $("html").removeClass("scroll-none");
  });
});

// 그래픽 슬라이드
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});
//그래픽 3d 효과
// const frame = document.getElementById("frame");
// const card = document.getElementById("card");
// const light = document.getElementById("light");

// let { x, y, width, height } = frame.getBoundingClientRect();

// function mouseMove(e) {
//   const left = e.clientX - x;
//   const top = e.clientY - y;
//   const centerX = left - width / 2;
//   const centerY = top - height / 2;
//   const d = Math.sqrt(centerX ** 2 + centerY ** 2);

//   card.style.boxShadow = `
//       ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
//     `;

//   card.style.transform = `
//       rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)
//     `;

//   light.style.backgroundImage = `
//       radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)
//       `;
// }

// frame.addEventListener("mouseenter", () => {
//   frame.addEventListener("mousemove", mouseMove);
// });

// frame.addEventListener("mouseleave", () => {
//   frame.removeEventListener("mousemove", mouseMove);
//   card.style.boxShadow = "";
//   card.style.transform = "";
//   light.style.backgroundImage = "";
// });

// window.addEventListener("resize", () => {
//   rect = frame.getBoundingClientRect();
//   x = rect.x;
//   y = rect.y;
//   width = rect.width;
//   height = rect.height;
// });
