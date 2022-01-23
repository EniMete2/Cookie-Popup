console.log("Hello");

var tl1 = gsap
  .timeline()
  .fromTo(
    ".pop-up",
    { scale: 0.5 },
    { scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
  );

tl1.from(".title", { y: -20, opacity: 0, duration: 1, ease: "power1.out" });
tl1.from(
  ".notice",
  { y: 20, opacity: 0, duration: 1, ease: "power1.out" },
  "<"
);
tl1.from(
  ".confirm",
  { y: 20, opacity: 0, duration: 1, ease: "power1.out" },
  "<"
);
tl1.from(
  ".cookie",
  {
    x: -120,
    rotation: -90,
    duration: 1,
    ease: "power1.out",
  },
  "<"
);
tl1.fromTo(
  ".cookie",
  { y: 0, rotation: 0 },
  {
    y: -20,
    rotation: -20,
    yoyo: true,
    duration: 0.5,
    ease: "power2.out",
    repeat: -1,
  }
);
tl1.fromTo(
  "#crumbs",
  { y: 0 },
  {
    y: -20,
    yoyo: true,
    duration: 0.5,
    ease: "power2.out",
    repeat: -1,
  },
  "<"
);

document.querySelector(".confirm").addEventListener("click", function () {
  gsap.to(".pop-up", { scale: 0, duration: 0.5, ease: "back.in(1.7)" });
});
