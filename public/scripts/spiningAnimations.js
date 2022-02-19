let exitAnimationRunning = false;

const entranceAnimation = gsap.to($cubic, {
    rotationX: "+=360",
    rotationY: "+=360",
    duration: 2,
    ease: "none",
    repeat: -1,
    paused: true,
})
const exitAnimation = gsap.to($cubic, {
    rotationX: 0,
    rotationY: 0,
    duration: 1.5,
    paused: true,
    clearProps: 'all',
    onComplete: () => {
        exitAnimationRunning = false;
    }
})


const animate = (event) => {
    if (exitAnimationRunning) return;

    if (entranceAnimation.isActive() === true) {    
        entranceAnimation.pause();
        exitAnimation.restart();
        exitAnimationRunning = true;
        isSpining = false;
       // event.target.innerHTML = 'Lets spin!';

    } else {
        entranceAnimation.restart();
        isSpining = true;
       // event.target.innerHTML = 'Stop spin!';

    }
}

animateButton.addEventListener("click", animate, false);