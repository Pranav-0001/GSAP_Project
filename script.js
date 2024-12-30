gsap.to("#page2 h1", {
  transform: "translateX(-270%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller:"body",
    start: "top 0%",
    end: "top -100%",
    scrub: true,
    markers: true,
    pin: true,
  },
});
