const entranceAnim = () => {
  const entranceAnimationTL = gsap.timeline({ repeatDelay: 1 });

  entranceAnimationTL
    .from(".header__icon .face-front, .face-right, .face-top", 0.5, {
      fill: "transparent",
      opacity: 0,
      stagger: 0.05,
    })
    .from(
      ".header__title",
      0.5,
      {
        y: -100,
        opacity: 1,
        ease: Power4.easeOuteaseOut,
      },
      "<"
    )

    .from(
      ".cubic__mini",
      2,
      {
        rotationX: 1200,
        rotationY: 1200,
        x: -4000,
        z: -500,
        y: -4000,
        stagger: 0.05,
        background: "transparent",
        ease: "back",
      },
      0.9
    )

    /*  .to(".cubic__face--uncolored", 0.4, {
      background: "black",
    }) */

    .from(".action-bar", 0.5, {
      y: 1000,
      opacity: 1,
      overflox: "hidden",
    })
    .from(
      ".flows-buttons",
      0.5,
      {
        x: 1000,
        opacity: 1,
        overflox: "hidden",
      },
      "<"
    );
};

if (!DEBUG_MODE) {
  entranceAnim();
}
