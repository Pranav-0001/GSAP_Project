gsap.to("#page2 h1", {
  transform: "translateX(-270%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -200%",
    scrub: true,
    markers: true,
    pin: true,
  },
});

let tl = gsap.timeline();
tl.from("#nav", { y: -100, opacity: 0, duration: 0.8 });
tl.from("#nav h1", { y: -100, opacity: 0, duration: 0.5 });
tl.from("#nav ul li", { y: -100, opacity: 0, duration: 0.7, stagger: 0.3 });

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

gsap.from("#page3 h2",{
    x: -1300,
    scrollTrigger:{
        trigger: "#page3",
        scrub: true,
        end: "top 0%",
    }
})
gsap.from("#page3 p",{
    x: 1300,
    scrollTrigger:{
        trigger: "#page3",
        scrub: true,
        end: "top 0%",
    }
})
