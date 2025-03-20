// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#altsuli-container",
    {
      opacity: 0,
      y: 100,
    },
    {
      scrollTrigger: "#prices-container",
      opacity: 1,
      y: 0,
      duration: 0.7,
    }
  );

  gsap.fromTo(
    "#kozepsuli-container",
    {
      opacity: 0,
      y: 100,
    },
    {
      scrollTrigger: "#prices-container",
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    "#felnott-container",
    {
      opacity: 0,
      y: 100,
    },
    {
      scrollTrigger: "#prices-container",
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: 0.6,
    }
  );

  var btnIntro = document.getElementById("intro-link");
  btnIntro.addEventListener("mouseenter", () => {
    gsap.to("#intro-bg", { top: 0, duration: 0.2 });
    gsap.to("#intro-text-1", { top: "-1.5rem", duration: 0.3 });
    gsap.to("#intro-text-2", { top: "0", duration: 0.3 });
  });
  btnIntro.addEventListener("mouseleave", () => {
    gsap.to("#intro-bg", { top: "4rem", duration: 0.2 });
    gsap.to("#intro-text-1", { top: "0", duration: 0.3 });
    gsap.to("#intro-text-2", { top: "1.5rem", duration: 0.3 });
  });

  var btnPrices = document.getElementById("prices-link");
  btnPrices.addEventListener("mouseenter", () => {
    gsap.to("#prices-bg", { top: 0, duration: 0.2 });
    gsap.to("#prices-text-1", { top: "-1.5rem", duration: 0.3 });
    gsap.to("#prices-text-2", { top: "0", duration: 0.3 });
  });
  btnPrices.addEventListener("mouseleave", () => {
    gsap.to("#prices-bg", { top: "4rem", duration: 0.2 });
    gsap.to("#prices-text-1", { top: "0", duration: 0.3 });
    gsap.to("#prices-text-2", { top: "1.5rem", duration: 0.3 });
  });
});
