// let SplitClient;
// const targets = gsap.utils.toArray(".split");
// function SplitText() {
//   SplitClient = new SplitType(targets, {
//     lineClass: "SplitClient-lines",
//     wordClass: "SplitClient-words",
//     charClass: "SplitClient-chars",
//   });
// }

// SplitText();
// targets.forEach((target) => {
//   let chars = target.querySelectorAll(".SplitClient-chars");
//   let words = target.querySelectorAll(".SplitClient-words");
//   chars.forEach((item) => {
//     item.classList.add("abhaya");
//   });
//   words.forEach((item) => {
//     item.style.overflow = "hidden";
//   });

//   gsap.from(chars, {
//     stagger: { amount: 0.8 },
//     yPercent: 100,
//     scrollTrigger: {
//       trigger: target,
//       start: "top 80%",
//       end: "+=100",
//       scrub: "true",
//     },
//   });
// });

// window.addEventListener("resize", function () {
//   SplitClient.revert();
//   SplitText();
// });

// let sec2Word = document.querySelectorAll(".word");
// sec2Word.forEach((e) => {
//   e.classList.add("cursor-scale");
// });

// let sec2Word = document.querySelectorAll(".word");
// sec2Word.forEach((e) => {
//   e.classList.add("cursor-scale");
// });
// const targets = gsap.utils.toArray(".split");
// targets.forEach((target) => {
//   let SplitClient = new SplitType(target, { type: "lines, words, chars" });
//   let lines = SplitClient.lines;
//   let words = SplitClient.words;
//   let chars = SplitClient.chars;
//   chars.forEach((item) => {
//     item.classList.add("abhaya");
//   });
//   words.forEach((item) => {
//     item.style.overflow = "hidden";
//   });
//   let sec2Word = document.querySelectorAll('.word')
//   sec2Word.forEach((e)=>{
//     e.classList.add('cursor-scale')
//   })

//   gsap.from(chars, {
//     yPercent: 100,
//     autoAlpha: 0,
//     duration: 1,
//     ease: "power1.inOut",
//     stagger: {
//       amount: 1,
//     },
//     scrollTrigger: {
//       trigger: chars,
//       start: "top bottom",
//       end: "+=50",
//       autoAlpha: 1,
//       yPercent: 0,
//       scrub: 1,
//     },
//   });
// });


  //  scrollTrigger.batch(".item", {
  //   onEnter: batch => {
  //     gsap.to(batch, {
  //       trigger: item,
  //       start: "top center",
  //       opacity:1,
  //       yPercent: 0,
  //       stagger: 0.5,
  //     } )
  //   },
  //   once: true
  //  });




  // fadeinEls.forEach((animation) => {
  //   gsap.from(animation, {
  //     yPercent: 100,
  //     autoAlpha: 0,
  //     duration: 1,
  //     ease: "ease",
  //     scrollTrigger: {
  //       trigger: animation,
  //       start: "top bottom",
  //       end: "+=20",
  //       autoAlpha: 1,
  //       yPercent: 0,
  //       scrub: 1,
  //       markers:true,
  //       stagger: {
  //         amount: 1,
  //       },
  //     },
  //   });
  // });