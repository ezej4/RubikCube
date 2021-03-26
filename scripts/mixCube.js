const $mixCubegButton = document.getElementById('mix-button')


const getRandomMove = () => {
    const movesCopy = { ...MOVES }
    var result;
    var count = 0;
    for (var prop in movesCopy)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}

const setIntervalX = (callback, delay, repetitions, callbackFinish) => {
    let x = 0;
    const intervalID = window.setInterval(function() {

        callback();

        if (x === repetitions) {
            window.clearInterval(intervalID);
            callbackFinish();
        }
        x++;
    }, delay);
}

const handleMixCubeClick = () => {
    const amountOfMixins = 20;
   /*   swithBackground(() => {  */
        setIntervalX(() => {
            const aleatoryMove = getRandomMove();
            moveCube(aleatoryMove, 0.08)
        }, 100, amountOfMixins, () => {
            // swithBackground({}, true)
        })
    /*  })  */

}

const swithBackground = (callback, reverse) => {
    const $backgroundElement = document.getElementById('interactive-background');
    const animationTl = gsap.timeline({
        paused: true,
    });


    animationTl.to($backgroundElement, 1, {
        background: 'rgba(0,0,0,0.2)',
        width: '100%',
        height: '100%',
        onComplete: callback
    })

    animationTl.to($backgroundElement, 2, {
        background: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        y: -1000,
        delay: 2,
        clearProps: 'all',
    })

    animationTl.play();

};

$mixCubegButton.addEventListener("click", handleMixCubeClick, false);