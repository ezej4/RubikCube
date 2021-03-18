// mouse movements function.
const getFace = (classList) => {
    const formatedClassList = Array.from(classList)
    const filteredClassList = formatedClassList.filter(className => {
        return className.includes('cubic__face--');
    })
    return filteredClassList[0].split('--')[1];
}


const getMiniCubeById = (id) => {
    if (!id) return;

    const result = miniCubeModel.flat().find((miniCube) => miniCube.name == id);
    return result;
};

const getMiniCubeIndexsById = (id) => {
    if (!id) return;
    let result = null;

    // array every only for break the loop
    miniCubeModel.every((miniCubeRow, indexRow) => {
        const indexMiniCube = miniCubeRow.findIndex(miniCube => miniCube.name === id);
        // find index in this row
        if (indexMiniCube !== -1) {
            result = [indexRow, indexMiniCube];
            return false;
        }
        return true;
    })
    return result;
}

const getProximityMovements = (cubeId, face) => {
    if (!cubeId || !face) return;

    const cubeIndexs = getMiniCubeIndexsById(cubeId);
    const { x, y } = cubePosition;

    const movesForCubeRotation = MOUSE_MOVEMENTS.find(element => {
        return element.xAngle === x && element.yAngle === y
    })

    const miniCubeManualMovement = movesForCubeRotation.value.find(miniCube => {
        return miniCube.miniCube[0] === cubeIndexs[0] && miniCube.miniCube[1] === cubeIndexs[1];
    })

    return miniCubeManualMovement.proximityMoves[face];
}

const detectMouseMoveDirection = ({ originMousePosition, currentMousePosition }) => {
    const { pageX: xOrigin, pageY: yOrigin } = originMousePosition;
    const { pageX: xCurrent, pageY: yCurrent } = currentMousePosition;

    const xDisplacement = xOrigin - xCurrent;
    const yDisplacement = yOrigin - yCurrent;

    let direction = null;

    if (Math.abs(xDisplacement) > Math.abs(yDisplacement)) {
        if (xDisplacement < 0) {
            direction = 'right';
        } else direction = 'left';

    } else {
        if (yDisplacement < 0) {
            direction = 'bottom'
        } else direction = 'top';
    }
    return { direction, xDisplacement, yDisplacement };
}

/* const detectMouseMovement = ({ originMousePosition, currentMousePosition }) => {
    const { direction } = detectMouseMoveDirection({ originMousePosition, currentMousePosition });

    return proximityMoves[direction];

}; */

const originMousePosition = {
    pageX: 0,
    pageY: 0,
    isSetted: false,
};

let $implicatedMiniCubes = [];
let proximityMoves = [];
let direction = '';
let move = null;
let isMovingNow = false;

const mouseMovement = (event) => {
    const { target } = event;

    if (!target.classList.contains('cubic__face') || isGrabbing) return;
    if (isMovingNow) return;
    isMovingNow = true;
    const $faceClicked = target;
    const { id } = target.parentElement
    const cubeId = target.parentElement.id
    const face = getFace(target.classList);
    const miniCubeSelected = getMiniCubeById(id);

    proximityMoves = getProximityMovements(cubeId, face);
    selectedArea.addEventListener("mousemove", listenMouseMove)
    selectedArea.addEventListener("mouseleave", mouseUpHandler)
    selectedArea.addEventListener("mouseup", mouseUpHandler)
}

const getRotations = ({ pageX, pageY }) => {
    const results = { x: 0, y: 0, z: 0 };
    let xRotation = 0;
    let yRotation = 0;
    let zRotation = 0;

    if (!move) {
        return results;
    }

    if (move.rotation.x !== 0) {
        yRotation = ((originMousePosition.pageY - pageY) / $cubicPlain.offsetHeight) * 100;

        if (proximityMoves.invertedY) {
            yRotation = ((pageY - originMousePosition.pageY) / $cubicPlain.offsetHeight) * 100;
        }

        return { ...results, x: yRotation }

    } else if (move.rotation.y !== 0) {
        xRotation = (pageX - originMousePosition.pageX) / $cubicPlain.offsetWidth * 100;

        return { ...results, y: xRotation }

    } else if (move.rotation.z !== 0) {
        zRotation = ((originMousePosition.pageY - pageY) / $cubicPlain.offsetHeight) * 100;

        if (proximityMoves.invertedZ) {
            zRotation = (pageY - originMousePosition.pageY) / $cubicPlain.offsetHeight * 100;
        }
        return { ...results, z: zRotation }

    }

}

const listenMouseMove = (event) => {
    const { pageX, pageY } = event;

    if (originMousePosition.pageX === pageX && originMousePosition.pageY === pageY) return;

    if (!originMousePosition.isSetted) {

        originMousePosition.pageX = pageX;
        originMousePosition.pageY = pageY;
        originMousePosition.isSetted = true;

        return;
    }

    if (!move) {
        const currentMousePosition = { pageX, pageY };

        const { direction: detectedDirection } = detectMouseMoveDirection({ originMousePosition, currentMousePosition });
        direction = detectedDirection;

        const detectedMove = proximityMoves[direction];

        move = MOVES[detectedMove];

        move.implicatedMiniCubes.forEach(({ element }) => {
            const miniCubeModelName = miniCubeModel[element[0]][element[1]].name;
            $implicatedMiniCubes.push(document.getElementById(miniCubeModelName));
        })
        movesElementsToAnotherParent($implicatedMiniCubes, $cubicPlain)

    } else {

        const { x, y, z } = getRotations({ pageX, pageY });

        gsap.to($cubicPlain, .3, {
            rotationY: y,
            rotationZ: z,
            rotationX: x,
            ease: "Power1.easeOut",
        });
    }

}

const hasMinimunMoveMouse = (xDisplacement, yDisplacement, direction) => {
    if (direction === 'left' || direction === 'right') {
        return Math.abs(xDisplacement) > 100
    }

    return Math.abs(yDisplacement) > 100
}

const resetVariables = () => {
    //movesElementsToAnotherParent($implicatedMiniCubes, $cubic)
    $implicatedMiniCubes = [];
    originMousePosition.isSetted = false;
    move = null;
    direction = '';
};

const mouseUpHandler = (event) => {
    selectedArea.removeEventListener("mousemove", listenMouseMove)

    const { pageX, pageY } = event;
    const { pageX: xOrigin, pageY: yOrigin } = originMousePosition;

    if (!originMousePosition || !xOrigin || !yOrigin || !move) {
        resetVariables();
        return
    };

    const currentMousePosition = { pageX, pageY };

    const { xDisplacement, yDisplacement } = detectMouseMoveDirection({ originMousePosition, currentMousePosition })

    const isMouseMoveEnough = hasMinimunMoveMouse(xDisplacement, yDisplacement, direction);

    if (!isMouseMoveEnough) {
        gsap.to($cubicPlain, {
            duration: .3,
            rotationY: 0,
            rotationX: 0,
            rotationZ: 0,
            clearProps: 'all',
            onComplete: () => {
                movesElementsToAnotherParent($implicatedMiniCubes, $cubic)
                isMovingNow = false;
                resetVariables();
            }
        });

        return;
    }

    let moveToExec = '';

    switch (direction) {
        case 'right': {
            moveToExec = xDisplacement < 0 ? move.name : move.inverse;
            break;
        }
        case 'left': {
            moveToExec = xDisplacement > 0 ? move.name : move.inverse;
            break;
        }
        case 'top': {
            moveToExec = yDisplacement > 0 ? move.name : move.inverse;
            break;
        }
        case 'bottom': {
            moveToExec = yDisplacement < 0 ? move.name : move.inverse;
            break;
        }
    }


    moveCube(moveToExec);

    setTimeout(() => {
        isMovingNow = false;
    }, 500);
    
    //gsap.to($cubicPlain, { clearProps: 'all' })

    resetVariables();

}

selectedArea.addEventListener("mousedown", mouseMovement)