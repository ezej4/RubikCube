const MOVES = {
    'U': {
        name: 'U',
        rotation: { x: 0, y: 90, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 0], to: [0, 2] },
            { element: [0, 1], to: [1, 2] },
            { element: [0, 2], to: [2, 2] },
            { element: [1, 0], to: [0, 1] },
            { element: [1, 1], to: [1, 1] },
            { element: [1, 2], to: [2, 1] },
            { element: [2, 0], to: [0, 0] },
            { element: [2, 1], to: [1, 0] },
            { element: [2, 2], to: [2, 0] },
        ]
    },
    'U!': {
        name: 'U!',
        rotation: { x: 0, y: -90, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 0], to: [2, 0] },
            { element: [0, 1], to: [1, 0] },
            { element: [0, 2], to: [0, 0] },
            { element: [1, 0], to: [2, 1] },
            { element: [1, 1], to: [1, 1] },
            { element: [1, 2], to: [0, 1] },
            { element: [2, 0], to: [2, 2] },
            { element: [2, 1], to: [1, 2] },
            { element: [2, 2], to: [0, 2] },
        ]
    },
    'E': {
        name: 'E',
        rotation: { x: 0, y: 90, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 3], to: [0, 5] },
            { element: [0, 4], to: [1, 5] },
            { element: [0, 5], to: [2, 5] },
            { element: [1, 3], to: [0, 4] },
            { element: [1, 4], to: [1, 4] },
            { element: [1, 5], to: [2, 4] },
            { element: [2, 3], to: [0, 3] },
            { element: [2, 4], to: [1, 3] },
            { element: [2, 5], to: [2, 3] },
        ]
    },
    'E!': {
        name: 'E!',
        rotation: { x: 0, y: -90, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 3], to: [2, 3] },
            { element: [0, 4], to: [1, 3] },
            { element: [0, 5], to: [0, 3] },
            { element: [1, 3], to: [2, 4] },
            { element: [1, 4], to: [1, 4] },
            { element: [1, 5], to: [0, 4] },
            { element: [2, 3], to: [2, 5] },
            { element: [2, 4], to: [1, 5] },
            { element: [2, 5], to: [0, 5] },
        ]
    },
    'D': {
        name: 'D',
        rotation: { x: 0, y: 90, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 6], to: [0, 8] },
            { element: [0, 7], to: [1, 8] },
            { element: [0, 8], to: [2, 8] },
            { element: [1, 6], to: [0, 7] },
            { element: [1, 7], to: [1, 7] },
            { element: [1, 8], to: [2, 7] },
            { element: [2, 6], to: [0, 6] },
            { element: [2, 7], to: [1, 6] },
            { element: [2, 8], to: [2, 6] },
        ]
    },
    'D!': {
        name: 'D!',
        rotation: { x: 0, y: -90, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 6], to: [2, 6] },
            { element: [0, 7], to: [1, 6] },
            { element: [0, 8], to: [0, 6] },
            { element: [1, 6], to: [2, 7] },
            { element: [1, 7], to: [1, 7] },
            { element: [1, 8], to: [0, 7] },
            { element: [2, 6], to: [2, 8] },
            { element: [2, 7], to: [1, 8] },
            { element: [2, 8], to: [0, 8] },
        ]
    },
    'R': {
        name: 'R',
        rotation: { x: 0, y: 0, z: 90 },
        implicatedMiniCubes: [
            { element: [0, 0], to: [0, 2] },
            { element: [0, 1], to: [0, 5] },
            { element: [0, 2], to: [0, 8] },
            { element: [0, 3], to: [0, 1] },
            { element: [0, 4], to: [0, 4] },
            { element: [0, 5], to: [0, 7] },
            { element: [0, 6], to: [0, 0] },
            { element: [0, 7], to: [0, 3] },
            { element: [0, 8], to: [0, 6] },
        ]
    },
    'R!': {
        name: 'R!',
        rotation: { x: 0, y: 0, z: -90 },
        implicatedMiniCubes: [
            { element: [0, 0], to: [0, 6] },
            { element: [0, 1], to: [0, 3] },
            { element: [0, 2], to: [0, 0] },
            { element: [0, 3], to: [0, 7] },
            { element: [0, 4], to: [0, 4] },
            { element: [0, 5], to: [0, 1] },
            { element: [0, 6], to: [0, 8] },
            { element: [0, 7], to: [0, 5] },
            { element: [0, 8], to: [0, 2] },
        ]
    },
    'M': {
        name: 'M',
        rotation: { x: 0, y: 0, z: 90 },
        implicatedMiniCubes: [
            { element: [1, 0], to: [1, 2] },
            { element: [1, 1], to: [1, 5] },
            { element: [1, 2], to: [1, 8] },
            { element: [1, 3], to: [1, 1] },
            { element: [1, 4], to: [1, 4] },
            { element: [1, 5], to: [1, 7] },
            { element: [1, 6], to: [1, 0] },
            { element: [1, 7], to: [1, 3] },
            { element: [1, 8], to: [1, 6] },
        ]
    },
    'M!': {
        name: 'M!',
        rotation: { x: 0, y: 0, z: -90 },
        implicatedMiniCubes: [
            { element: [1, 0], to: [1, 6] },
            { element: [1, 1], to: [1, 3] },
            { element: [1, 2], to: [1, 0] },
            { element: [1, 3], to: [1, 7] },
            { element: [1, 4], to: [1, 4] },
            { element: [1, 5], to: [1, 1] },
            { element: [1, 6], to: [1, 8] },
            { element: [1, 7], to: [1, 5] },
            { element: [1, 8], to: [1, 2] },
        ]
    },
    'L': {
        name: 'L',
        rotation: { x: 0, y: 0, z: 90 },
        implicatedMiniCubes: [
            { element: [2, 0], to: [2, 2] },
            { element: [2, 1], to: [2, 5] },
            { element: [2, 2], to: [2, 8] },
            { element: [2, 3], to: [2, 1] },
            { element: [2, 4], to: [2, 4] },
            { element: [2, 5], to: [2, 7] },
            { element: [2, 6], to: [2, 0] },
            { element: [2, 7], to: [2, 3] },
            { element: [2, 8], to: [2, 6] },
        ]
    },
    'L!': {
        name: 'L!',
        rotation: { x: 0, y: 0, z: -90 },
        implicatedMiniCubes: [
            { element: [2, 0], to: [2, 6] },
            { element: [2, 1], to: [2, 3] },
            { element: [2, 2], to: [2, 0] },
            { element: [2, 3], to: [2, 7] },
            { element: [2, 4], to: [2, 4] },
            { element: [2, 5], to: [2, 1] },
            { element: [2, 6], to: [2, 8] },
            { element: [2, 7], to: [2, 5] },
            { element: [2, 8], to: [2, 2] },
        ]
    },

    'F': {
        name: 'F',
        rotation: { x: -90, y: 0, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 0], to: [0, 6] },
            { element: [0, 3], to: [1, 6] },
            { element: [0, 6], to: [2, 6] },
            { element: [1, 0], to: [0, 3] },
            { element: [1, 3], to: [1, 3] },
            { element: [1, 6], to: [2, 3] },
            { element: [2, 0], to: [0, 0] },
            { element: [2, 3], to: [1, 0] },
            { element: [2, 6], to: [2, 0] },
        ]
    },
    'F!': {
        name: 'F!',
        rotation: { x: 90, y: 0, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 0], to: [2, 0] },
            { element: [0, 3], to: [1, 0] },
            { element: [0, 6], to: [0, 0] },
            { element: [1, 0], to: [2, 3] },
            { element: [1, 3], to: [1, 3] },
            { element: [1, 6], to: [0, 3] },
            { element: [2, 0], to: [2, 6] },
            { element: [2, 3], to: [1, 6] },
            { element: [2, 6], to: [0, 6] },
        ]
    },


    'S': {
        name: 'S',
        rotation: { x: -90, y: 0, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 1], to: [0, 7] },
            { element: [0, 4], to: [1, 7] },
            { element: [0, 7], to: [2, 7] },
            { element: [1, 1], to: [0, 4] },
            { element: [1, 4], to: [1, 4] },
            { element: [1, 7], to: [2, 4] },
            { element: [2, 1], to: [0, 1] },
            { element: [2, 4], to: [1, 1] },
            { element: [2, 7], to: [2, 1] },
        ]
    },


    'S!': {
        name: 'S!',
        rotation: { x: 90, y: 0, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 1], to: [2, 1] },
            { element: [0, 4], to: [1, 1] },
            { element: [0, 7], to: [0, 1] },
            { element: [1, 1], to: [2, 4] },
            { element: [1, 4], to: [1, 4] },
            { element: [1, 7], to: [0, 4] },
            { element: [2, 1], to: [2, 7] },
            { element: [2, 4], to: [1, 7] },
            { element: [2, 7], to: [0, 7] },
        ]
    },
    'B': {
        name: 'B',
        rotation: { x: -90, y: 0, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 2], to: [0, 8] },
            { element: [0, 5], to: [1, 8] },
            { element: [0, 8], to: [2, 8] },
            { element: [1, 2], to: [0, 5] },
            { element: [1, 5], to: [1, 5] },
            { element: [1, 8], to: [2, 5] },
            { element: [2, 2], to: [0, 2] },
            { element: [2, 5], to: [1, 2] },
            { element: [2, 8], to: [2, 2] },
        ]
    },
    'B!': {
        name: 'B!',
        rotation: { x: 90, y: 0, z: 0 },
        implicatedMiniCubes: [
            { element: [0, 2], to: [2, 2] },
            { element: [0, 5], to: [1, 2] },
            { element: [0, 8], to: [0, 2] },
            { element: [1, 2], to: [2, 5] },
            { element: [1, 5], to: [1, 5] },
            { element: [1, 8], to: [0, 5] },
            { element: [2, 2], to: [2, 8] },
            { element: [2, 5], to: [1, 8] },
            { element: [2, 8], to: [0, 8] },
        ]
    },
}

const movesElementsToAnotherParent = (elements, newParent) => {
    elements.forEach(element => {
        newParent.appendChild(element)
    })
}

const filterAndOrderFaces = (baseArray, orderArray) => {
    const result = [];
    let counter = 0;
    while (result.length < orderArray.length) {
        const value = baseArray.find((element) => element.label == orderArray[counter]);
        result.push(value)
        counter++;
    }

    return result;
};

const implicatedFaceMovementMapper = (movement) => {
    switch (movement) {
        case 'U':
        case 'E':
        case 'D':
            return ["front", "right", "back", "left"];
        case 'U!':
        case 'E!':
        case 'D!':
            return ["left", "back", "right", "front"];
        case 'R':
        case 'M':
        case 'L':
            return ["left", "top", "right", "bottom"];
        case 'R!':
        case 'M!':
        case 'L!':
            return ["bottom", "right", "top", "left"];
        case 'F':
        case 'S':
        case 'B':
            return ['front', 'bottom', 'back', 'top'];
        case 'F!':
        case 'S!':
        case 'B!':
            return ['top', 'back', 'bottom', 'front'];

        default:
            return false
    }
};

const rotateFaces = (miniCubeFaces, movement) => {

    const implicatedFaces = implicatedFaceMovementMapper(movement);
    const miniCubeFacesCopy = [...miniCubeFaces]

    const filteredArrayFaces = filterAndOrderFaces(miniCubeFacesCopy, implicatedFaces);
    const filteredArrayFacesCopy = [...filteredArrayFaces];

    filteredArrayFacesCopy.forEach((face, index) => {
        const amountOfFaces = filteredArrayFacesCopy.length;

        const isTheFirtsElement = index === 0;
        const nextFace = isTheFirtsElement ? filteredArrayFaces[amountOfFaces - 1] : filteredArrayFaces[index - 1]
        filteredArrayFacesCopy[index] = { ...face, value: nextFace.value };

    })

    filteredArrayFacesCopy.forEach((face, index) => {
        const IndexFaceToBeReplaced = miniCubeFacesCopy.findIndex(originalFace => originalFace.label === face.label);
        miniCubeFacesCopy[IndexFaceToBeReplaced] = { ...face };
    })

    return miniCubeFacesCopy;
}

const moveCube = (movement) => {
    if (isCubeMoving) return;

    const affectedMiniCubes = MOVES[movement].implicatedMiniCubes || null;

    if (affectedMiniCubes) {
        // depth copy of the main model without references.
        let miniCubeModelCopy = miniCubeModel.map((arr) => (
            arr.slice()
        ));

        affectedMiniCubes.forEach(({ element, to }) => {
            const [firstIndexElement, secondIndexElement] = element;
            const [firstIndexTo, secondIndexTo] = to;
            const originElement = { ...miniCubeModelCopy[firstIndexElement][secondIndexElement] };
            const destinationElement = miniCubeModel[firstIndexTo][secondIndexTo];

            originElement.position = destinationElement.position;
            originElement.faces = rotateFaces(originElement.faces, movement);
            originElement.hasToRePaint = true;

            miniCubeModel[firstIndexTo][secondIndexTo] = originElement;

        })

        ACTUAL_MOVEMENT = movement;
        rePaintCube();
    }

}

const rePaintCube = () => {
    isCubeMoving = true;
    const unPaintedMiniCubes = miniCubeModel.flat().filter(miniCube => miniCube.hasToRePaint);

    const $unPaintedMiniCubes = unPaintedMiniCubes.map(miniCube => {
        return document.getElementById(miniCube.name)
    });

    movesElementsToAnotherParent($unPaintedMiniCubes, $cubicPlain)
    const nextCubeRotation = MOVES[ACTUAL_MOVEMENT].rotation;

    gsap.to($cubicPlain, {
        duration: .5,
        rotationY: nextCubeRotation.y,
        rotationX: nextCubeRotation.x,
        rotationZ: nextCubeRotation.z,
        ease: "back.out(1.7)",
        //runBackwards: true,
        onComplete: () => {
            unPaintedMiniCubes.forEach((miniCube) => {
                const { x: xTranf, y: yTranf, z: zTranf } = miniCube.position
                miniCube.hasToRePaint = false;

                const $miniCubeElement = document.getElementById(miniCube.name);
                const newTransformStyle = `translate3d(${xTranf}px,${yTranf}px,${zTranf}px)`
                $miniCubeElement.style.transform = newTransformStyle;

                while ($miniCubeElement.firstChild) $miniCubeElement.removeChild($miniCubeElement.firstChild);
                miniCube.faces.forEach((currentface, index) => {
                    const face = document.createElement('div');
                    //face.innerHTML = indexMiniCube + 1;
                    face.className = `cubic__face cubic__face--${currentface.label}`

                    //face.innerHTML = miniCube.name.replace(/^\D+/g, '');

                    if (currentface.value) {
                        face.classList.add(`cubic__face--${currentface.value}`)
                    }


                    $miniCubeElement.appendChild(face)
                });
            })
            movesElementsToAnotherParent($unPaintedMiniCubes, $cubic)
            isCubeMoving = false;

            // cubicPlain.style.transform = 'rotateY(0)';
        }
    });
    gsap.to($cubicPlain, {
        duration: 0,
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        delay: .5,
    })

}


// // mouse movements function.
// const getFace = (classList) => {
//     const formatedClassList = Array.from(classList)
//     const filteredClassList = formatedClassList.filter(className => {
//         return className.includes('cubic__face--');
//     })
//     return filteredClassList[0].split('--')[1];
// }

// const getMiniCubeIndexsById = (id) => {
//     if (!id) return;
//     let result = null;

//     // array every only for break the loop
//     miniCubeModel.every((miniCubeRow, indexRow) => {
//         const indexMiniCube = miniCubeRow.findIndex(miniCube => miniCube.name === id);
//         // find index in this row
//         if (indexMiniCube !== -1) {
//             result = [indexRow, indexMiniCube];
//             return false;
//         }
//         return true;
//     })
//     return result;
// }

// const getPosiblesMovements = (indexRow, indexCube) => {
//     const result = [];
//     for (const move in MOVES) {
//         const isExistingCubeInThisMovement = MOVES[move].implicatedMiniCubes.find(({ element }) => element[0] === indexRow && element[1] === indexCube)
//         if (isExistingCubeInThisMovement) result.push(MOVES[move]);
//     };
//     return result;
// }

// const detectMouseMoveDirection = ({ originMousePosition, currentMousePosition }) => {
//     const { pageX: xOrigin, pageY: yOrigin } = originMousePosition;
//     const { pageX: xCurrent, pageY: yCurrent } = currentMousePosition;

//     const xDisplacement = xOrigin - xCurrent;
//     const yDisplacement = yOrigin - yCurrent;


//     console.log({ xOrigin, xCurrent, yOrigin, yCurrent })
//     //console.log({ originMousePosition, currentMousePosition })
//     let direction = null;

//     if (Math.abs(xDisplacement) > Math.abs(yDisplacement)) {
//         if (xDisplacement < 0) {
//             direction = 'right';
//         } else direction = 'left';

//     } else {
//         if (yDisplacement < 0) {
//             direction = 'top'
//         }
//         else direction = 'bottom';
//     }
//     return direction;
// }

// const detectMouseMovement = ({ posibleMovements, originFace, originMousePosition, currentMousePosition }) => {
//     const faceName = getFace(originFace.classList);
//     const mouseMoveDirection = detectMouseMoveDirection({ originMousePosition, currentMousePosition });
//     console.log(mouseMoveDirection);
//     let mouseMovement = '';

//     switch (faceName) {
//         case 'front': {
//             const cases = {
//                 'right': 'U',
//                 'left': 'U!',
//                 'top': 'R',
//                 'bottom': 'R!',
//             };
//             mouseMovement = cases[mouseMoveDirection];
//         }
//         case 'left': {
//             const cases = {
//                 'right': 'U',
//                 'left': 'U!',
//                 'top': 'R',
//                 'bottom': 'R!',
//             };
//             mouseMovement = cases[mouseMoveDirection];
//         }
//         case 'right': {
//             const cases = {
//                 'right': 'U',
//                 'left': 'U!',
//                 'top': 'R',
//                 'bottom': 'R!',
//             };
//             mouseMovement = cases[mouseMoveDirection];
//         }
//         case 'back': {
//             const cases = {
//                 'right': 'U',
//                 'left': 'U!',
//                 'top': 'R',
//                 'bottom': 'R!',
//             };
//             mouseMovement = cases[mouseMoveDirection];
//         }
//         case 'top': {
//             const cases = {
//                 'right': 'U',
//                 'left': 'U!',
//                 'top': 'R',
//                 'bottom': 'R!',
//             };
//             mouseMovement = cases[mouseMoveDirection];
//         }
//         case 'bottom': {
//             const cases = {
//                 'right': 'U',
//                 'left': 'U!',
//                 'top': 'R',
//                 'bottom': 'R!',
//             };
//             mouseMovement = cases[mouseMoveDirection];
//         }

//     }
//     console.log("RETORNO", mouseMovement)

//     return mouseMovement;
// };

// const originMousePosition = {
//     clientX: 0,
//     clientY: 0,
//     screenX: 0,
//     screenY: 0,
//     pageX: 0,
//     pageY: 0,
//     isSetted: false,
// };


// let posibleMovements = [];
// let $implicatedMiniCubes = [];
// let $faceClicked = '';

// const mouseMovement = (event) => {
//     const { target, clientX, clientY, screenX, screenY, pageX, pageY } = event;

//     if (!target.classList.contains('cubic__face')) return;

//     // get face of clicked element
//     //faceClicked = getFace(target.classList);

//     // get the face clicked 
//     $faceClicked = target;
//     // get the id of the parent (miniCube)
//     const { id } = target.parentElement
//     // get the indexs inside the model
//     const [indexRow, indexCube] = getMiniCubeIndexsById(id);

//     // get all posible movement of the clicked element
//     posibleMovements = getPosiblesMovements(indexRow, indexCube)

//     selectedArea.addEventListener("mousemove", listenMouseMove)
// }

// let move = null;

// const listenMouseMove = (event) => {
//     const { clientX, clientY, screenX, screenY, pageX, pageY } = event;

//     if (originMousePosition.pageX === pageX && originMousePosition.pageY === pageY) return;


//     if (!originMousePosition.isSetted) {
//         console.log("1")
//         originMousePosition.clientX = clientX;
//         originMousePosition.clientY = clientY;
//         originMousePosition.screenX = screenX;
//         originMousePosition.screenY = screenY;
//         originMousePosition.pageX = pageX;
//         originMousePosition.pageY = pageY;
//         originMousePosition.isSetted = true;

//         return;

//     } else if ($implicatedMiniCubes.length === 0) {
//         console.log("2")
//         const currentMousePosition = { clientX, clientY, screenX, screenY, pageX, pageY };
//         const detectingMovement = detectMouseMovement({ originFace: $faceClicked, originMousePosition, currentMousePosition, });

//         move = MOVES[detectingMovement];
//         move.implicatedMiniCubes.forEach(({ element }) => {
//             const miniCubeModelName = miniCubeModel[element[0]][element[1]].name;
//             $implicatedMiniCubes.push(document.getElementById(miniCubeModelName));
//         })
//         movesElementsToAnotherParent($implicatedMiniCubes, $cubicPlain)
//     }

//     const xPos = event.clientX / selectedArea.offsetWidth;
//     const yPos = event.clientY / selectedArea.offsetHeight;


//     if (move) {
//         gsap.to($cubicPlain, 1, {
//             rotationY: move.rotation.y !== 0 ? xPos * 100 : 0,
//             rotationZ: move.rotation.z !== 0 ? yPos * 100 : 0,
//             ease: "Power1.easeOut",
//         });
//     }


//     // // if (move && move.rotation.y !== 0) {
//     // //     console.log("MOVIENDO")
//     // //     gsap.to($cubicPlain, 1, {
//     // //         rotationY: xPos * 100,
//     // //         ease: "Power1.easeOut",
//     // //     });
//     // // } else if (move && move.rotation.z !== 0) {
//     // //     gsap.to($cubicPlain, 1, {
//     // //         rotationZ: yPos * 100,
//     // //         ease: "Power1.easeOut",
//     // //     });
//     // }
// }

// const mouseUpHandler = (event) => {
//     selectedArea.removeEventListener("mousemove", listenMouseMove)

//     const { target, clientX: xDestination, clientY: yDestination } = event;
//     const { x: xOrigin, y: yOrigin } = originMousePosition;

//     if (!xOrigin || !yOrigin) {
//         return;
//     }

//     if (xOrigin > xDestination) {
//         movesElementsToAnotherParent($implicatedMiniCubes, $cubic);
//         moveCube('U!');
//     } else {
//         movesElementsToAnotherParent($implicatedMiniCubes, $cubic);
//         moveCube('U');
//     }

//     $implicatedMiniCubes = [];

// }

// selectedArea.addEventListener("mousedown", mouseMovement)

// selectedArea.addEventListener("mouseup", mouseUpHandler)