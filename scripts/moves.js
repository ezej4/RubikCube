const MOVES = {
    'U': {
        name: 'U',
        inverse: 'U!',
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
        inverse: 'U',
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
        inverse: 'E!',
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
        inverse: 'E',
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
        inverse: 'D!',
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
        inverse: 'D',
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
        inverse: 'R!',
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
        inverse: 'R',
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
        inverse: 'M!',
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
        inverse: 'M',
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
        inverse: 'L!',
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
        inverse: 'L',
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
        inverse: 'F!',
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
        inverse: 'F',
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
        inverse: 'S!',
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
        inverse: 'S',
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
        inverse: 'B!',
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
        inverse: 'B',
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
        filteredArrayFacesCopy[index] = { ...face, value: nextFace.value, proximityMoves: nextFace.proximityMoves };

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
        clearProps: 'all',
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
                    face.className = `cubic__face cubic__face--${currentface.label}`

                    //face.innerHTML = miniCube.name.replace(/^\D+/g, '');

                    if (currentface.value) {
                        face.classList.add(`cubic__face--${currentface.value}`)
                         face.innerHTML = currentface.id.split('-')[1] + " " + currentface.label ;
                    }


                    $miniCubeElement.appendChild(face)
                });
            })
            movesElementsToAnotherParent($unPaintedMiniCubes, $cubic)
            isCubeMoving = false;

            //gsap.to($cubicPlain, {delay: 1, clearProps: 'all' })

        }
    });

    /*   gsap.to($cubicPlain, {
          duration: 0,
          rotationY: 0,
          rotationX: 0,
          rotationZ: 0,
          delay: 1,
      }) */

}