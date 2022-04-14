const animateButton = document.getElementById("animate_button");
const animationDistance = IS_MOBILE ? 500 : 3000;

const spinningAnimationTL = gsap.timeline({
  paused: true,
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.2,
});

const animate = (event) => {
  if (isCubeMoving) return;

  if (!spinningAnimationTL.paused()) {
    spinningAnimationTL.seek(0);
    spinningAnimationTL.pause();
    IsCubeAnimating = false;
  } else {
    spinningAnimationTL.clear();
    spinningAnimationTL.to(".cubic__mini", 1.5, {
      x: `+=random(-${animationDistance}, ${animationDistance})`,
      y: `+=random(-${500}, ${500})`,
      rotationX: `+=random(-360, 360)`,
      rotationZ: `+=random(-360, 360)`,
      stagger: 0.05,
    });
    spinningAnimationTL.play();

    IsCubeAnimating = true;
  }
};

animateButton.addEventListener("click", animate, false);
