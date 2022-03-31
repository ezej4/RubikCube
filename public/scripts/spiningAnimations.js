const animateButton = document.getElementById("animate_button");
const animationDistance = IS_MOBILE ? 500 : 3000;
const entranceAnimation = gsap
  .to(".cubic__mini", 1.5, {
    x: `+=random(-${animationDistance}, ${animationDistance})`,
    y: `+=random(-${500}, ${500})`,
    rotationX: `+=random(-360, 360)`,
    rotationZ: `+=random(-360, 360)`,
    stagger: 0.05,
    paused: true,
    yoyo: true,
    repeat: -1,
  })
  .repeatDelay(0.2);

const animate = (event) => {
  console.log(document.getElementById("mini-cube-1"));

  if (isCubeMoving) return;

  if (!entranceAnimation.paused()) {
    entranceAnimation.seek(0);
    entranceAnimation.pause();
    IsCubeAnimating = false;
  } else {
    entranceAnimation.play();
    IsCubeAnimating = true;
  }
};

animateButton.addEventListener("click", animate, false);
