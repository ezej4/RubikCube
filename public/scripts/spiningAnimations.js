const animateButton = document.getElementById("animate_button");
const entranceAnimation = gsap
  .to(".cubic__mini", 2.5, {
    background: "transparent",
    x: 500,
    y: -400,
    stagger: 0.8,
    opacity: 0,
    yoyo: true,
    paused: true,
    repeat: -1,
  })
  .repeatDelay(0.2);

const animate = (event) => {
  if (!entranceAnimation.paused()) {
    entranceAnimation.seek(0);
    entranceAnimation.pause();
  } else {
    entranceAnimation.play();
  }
};

animateButton.addEventListener("click", animate, false);
