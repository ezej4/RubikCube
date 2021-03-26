/* let negativeNumber = false;
miniCubeModel.flat().forEach((miniCube, index) => {
   // if (index > 8) return; 
    const $miniCubeElement = document.getElementById(miniCube.name);
    const xRandomNumber = (Math.floor(10000 + Math.random() * 9000));
    const yRandomNumber = (Math.floor(10000 + Math.random() * 9000));

    entranceAnimationTL.from($miniCubeElement,
        .4, {
             x: negativeNumber ? -1 * xRandomNumber : xRandomNumber,
            x: negativeNumber ? -1 * yRandomNumber : yRandomNumber, 
            rotationZ: "60",
            rotationX: "180",
            rotationY: "360",
            //yoyo: true,
        });
    negativeNumber = !negativeNumber;
})

 */
/* 
entranceAnimationTL.from('.section-cubic__main',
    5, {
        //rotationZ: "+=360",
        rotationX: "+=360",
        rotationY: "+=360",
        //yoyo: true,
    }); */


/* entranceAnimationTL.from(".cubic__mini",
    2, {
        x: 100,
        y: 100,
        //z: -20,
        //ease: Bounce.easeOut,
        stagger: 0.1,

    }); */

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


/* entranceAnim(); */