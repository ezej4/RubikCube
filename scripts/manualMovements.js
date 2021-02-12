
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

const getProximityMovements = (cube, faceId) => {
    if (!cube || !faceId) return;

    const face = cube.faces.find(face => face.id == faceId);

    return face && face.proximityMoves
}

const detectMouseMoveDirection = ({ originMousePosition, currentMousePosition }) => {
    const { pageX: xOrigin, pageY: yOrigin } = originMousePosition;
    const { pageX: xCurrent, pageY: yCurrent } = currentMousePosition;

    const xDisplacement = xOrigin - xCurrent;
    const yDisplacement = yOrigin - yCurrent;


    console.log({ xOrigin, xCurrent, yOrigin, yCurrent })
    //console.log({ originMousePosition, currentMousePosition })
    let direction = null;

    if (Math.abs(xDisplacement) > Math.abs(yDisplacement)) {
        if (xDisplacement < 0) {
            direction = 'right';
        } else direction = 'left';

    } else {
        if (yDisplacement < 0) {
            direction = 'top'
        }
        else direction = 'bottom';
    }
    return direction;
}

const detectMouseMovement = ({ originMousePosition, currentMousePosition }) => {
    const mouseMoveDirection = detectMouseMoveDirection({ originMousePosition, currentMousePosition });

    return proximityMoves[mouseMoveDirection];

};

const originMousePosition = {
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0,
    pageX: 0,
    pageY: 0,
    isSetted: false,
};


let posibleMovements = [];
let $implicatedMiniCubes = [];
let $faceClicked = '';
let proximityMoves = [];

const mouseMovement = (event) => {
    const { target, clientX, clientY, screenX, screenY, pageX, pageY } = event;

    if (!target.classList.contains('cubic__face') || isGrabbing) return;

    // get face of clicked element
    //faceClicked = getFace(target.classList);

    // get the face clicked 
    $faceClicked = target;
    // get the id of the parent (miniCube)
    const { id } = target.parentElement
    // get the indexs inside the model
    const miniCubeSelected = getMiniCubeById(id);

    proximityMoves = getProximityMovements(miniCubeSelected, $faceClicked.id);

    // // get all posible movement of the clicked element
    // posibleMovements = getPosiblesMovements(indexRow, indexCube)

    selectedArea.addEventListener("mousemove", listenMouseMove)
}

let move = null;

const listenMouseMove = (event) => {
    const { clientX, clientY, screenX, screenY, pageX, pageY } = event;

    if (originMousePosition.pageX === pageX && originMousePosition.pageY === pageY) return;

    if (!originMousePosition.isSetted) {
        console.log("1")
        originMousePosition.clientX = clientX;
        originMousePosition.clientY = clientY;
        originMousePosition.screenX = screenX;
        originMousePosition.screenY = screenY;
        originMousePosition.pageX = pageX;
        originMousePosition.pageY = pageY;
        originMousePosition.isSetted = true;

        return;
    }

    if (!move) {
        const currentMousePosition = { clientX, clientY, screenX, screenY, pageX, pageY };
        const detectingMovement = detectMouseMovement({ originFace: $faceClicked, originMousePosition, currentMousePosition, });

        move = MOVES[detectingMovement];
        console.log(move)

        move.implicatedMiniCubes.forEach(({ element }) => {
            const miniCubeModelName = miniCubeModel[element[0]][element[1]].name;
            $implicatedMiniCubes.push(document.getElementById(miniCubeModelName));
        })
        movesElementsToAnotherParent($implicatedMiniCubes, $cubicPlain)
    }


    else {
        const xPos = (event.pageX - originMousePosition.pageX) / $cubicPlain.offsetWidth;
        const yPos = (originMousePosition.pageY - event.pageY) / $cubicPlain.offsetHeight;

        gsap.to($cubicPlain, 1, {
            rotationY: move.rotation.y !== 0 ? xPos * 100 : 0,
            rotationZ: move.rotation.z !== 0 ? yPos * 100 : 0,
            ease: "Power1.easeOut",
        });
    }

}

const mouseUpHandler = (event) => {
    selectedArea.removeEventListener("mousemove", listenMouseMove)

    const { target, pageX, pageY } = event;
    const { pageX: xOrigin, pageY: yOrigin } = originMousePosition;

    if (!originMousePosition) return;

    if (!xOrigin || !yOrigin) {
        return;
    }
    const currentMousePosition = { pageX, pageY };
    
    const finishDirection = detectMouseMoveDirection({ originMousePosition, currentMousePosition })

    const moveToExec = proximityMoves[finishDirection];

    moveCube(moveToExec);


    gsap.to($cubicPlain, {
        duration: 0,
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        delay: 1,
    });

    $implicatedMiniCubes = [];
    originMousePosition.isSetted = false;
    move = null;

}

selectedArea.addEventListener("mousedown", mouseMovement)

selectedArea.addEventListener("mouseup", mouseUpHandler)