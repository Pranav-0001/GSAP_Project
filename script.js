gsap.to("#page2 h1", {
  transform: "translateX(-270%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -200%",
    scrub: true,
    pin: true,
  },
});

let tl = gsap.timeline();
tl.from("#nav", { y: -100, opacity: 0, duration: 0.8 });
tl.from("#nav h1", { y: -100, opacity: 0, duration: 0.5 });

gsap.from("#page1 h1", {
  y: 800,
  stagger: 0.2,
  duration: 1,
});
gsap.to("#page1 #box", {
  x: 300,
  yoyo: true,
  repeat: -1,
  duration: 2,
});

gsap.from("#page4 h2", {
  x: -1300,
  scrollTrigger: {
    trigger: "#page4",
    scrub: true,
    end: "top 0%",
  },
});
gsap.from("#page4 p", {
  x: 1300,
  scrollTrigger: {
    trigger: "#page4",
    scrub: true,
    end: "top 0%",
  },
});

var path = "M 10 100 Q 775 100 1530 100";
var finalPath = "M 10 100 Q 775 100 1530 100";

var string = document.querySelector("#page3");
string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 1530 100`;
  gsap.to("#page3 svg path", {
    attr: {
      d: path,
    },
    duration: 0.2,
    ease: "power3.Out",
  });
  gsap.to("#cursor", {
    x: dets.offsetX,
    y: dets.offsetY,
    duration: 1,
    ease: "back.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("#page3 svg path", {
    attr: {
      d: finalPath,
    },
    duration: 0.3,
    ease: "bounce.out",
  });
});
let cursor2 = document.querySelector("#cursor2");
let page5 = document.querySelector("#page5");
let image = document.querySelector("#image");

page5.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out",
    opacity: 1,
  });
});
page5.addEventListener("mouseleave", function () {
  gsap.to("#cursor2", {
    opacity: 0,
    duration: 0.6,
    ease: "back.out",
  });
});
image.addEventListener("mouseenter", function (dets) {
  cursor2.innerHTML = "View More";
  gsap.to(cursor2, {
    scale: 4,
    backgroundColor: "rgba(255, 255, 255, 0.281)",
    ease: "back.out",
  });
});
image.addEventListener("mouseleave", function (dets) {
  cursor2.innerHTML = "";
  console.log("leave");
  gsap.to(cursor2, {
    scale: 1,
    ease: "back.out",
    backgroundColor: "white",
  });
});

let tl2 = gsap.timeline();
let menuIcon = document.querySelector("nav i");
let crossIcon = document.querySelector("#full i");
tl2.to("#full", {
  right: 0,
  duration: 0.5,
});

tl2.from("#full h4", {
  x: 150,
  duration: 0.4,
  stagger: 0.1,
  opacity: 0,
});

tl2.from("#full i", {
  opacity: 0,
});

tl2.pause();

menuIcon.addEventListener("click", function () {
  console.log("clicked");
  tl2.play();
});

crossIcon.addEventListener("click", function () {
  tl2.reverse();
});
