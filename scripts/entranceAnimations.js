const entranceAnim = () => {
    const entranceAnimationTL = gsap.timeline({ repeatDelay: 1, });

    entranceAnimationTL
        .from(".header__icon .face-front, .face-right, .face-top", 0.5, {
            fill: "transparent",
            opacity: 0,
            stagger: 0.05,
        })
        .from(".header__title",
            0.5, {
                y: -100,
                opacity: 1,
                ease: Power4.easeOuteaseOut
            })
        .from(".cubic__face",
            1, {
                background: "transparent",
                rotationY: "360",
                rotationX: "180",
                rotationZ: "60",
                x: 500,
                y: -400,
                stagger: 0.01,
            })
        .from(".action-bar",
            0.5, {
                y: 1000,
                opacity: 1,
                overflox: 'hidden',
            })
        .from(".flows-buttons",
            0.5, {
                x: 1000,
                opacity: 1,
                overflox: 'hidden',
            });

}

if(!DEBUG_MODE){
    entranceAnim();
}
