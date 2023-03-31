console.clear();

gsap.registerPlugin("ScrollTrigger");

let wheel = document.querySelector(".wheel");
let images = gsap.utils.toArray(".wheel__card");

gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

function setup() {
  let radius = wheel.offsetWidth / 2;
  let center = wheel.offsetWidth / 2;
  let total = images.length;
  let slice = (2 * Math.PI) / total;

  images.forEach((item, i) => {
    let angle = i * slice;

    let x = center + radius * Math.sin(angle);
    let y = center - radius * Math.cos(angle);

    gsap.set(item, {
      rotation: angle + "_rad",
      xPercent: -50,
      yPercent: -50,
      x: x,
      y: y,
    });
  });
}

setup();

window.addEventListener("resize", setup);

gsap.to(".wheel", {
  rotate: () => -360,
  ease: "none",
  duration: images.length,
  scrollTrigger: {
    start: 0,
    end: "max",
    scrub: 1,
    snap: 1 / images.length,
    invalidateOnRefresh: true,
  },
});
