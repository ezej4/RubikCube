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

    const rotateFaces = (miniCubeFaces, movement) => {
        const implicatedMovementMapper = {
            'U!': ["front", "right", "back", "left"],
            'U': ["left", "back", "right", "front"],
            'R': ["bottom", "right", "top", "left"],
            'R!': ["left", "top", "right", "bottom"],
            'F': ['front', 'bottom', 'back', 'top'],
            'F!': ['top', 'back', 'bottom', 'front'],
        }

        const implicatedFaces = implicatedMovementMapper[movement];
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

    const moveThirdVariationClockwise = (movement) => {
        const cases = {
            'F': 0,
            'S': 1,
            'B!': 2,
        };

        // depth copy of the main model without references.
        let miniCubeModelCopy = miniCubeModel.map((arr) => (
            arr.slice()
        ));

        const afectedRow = cases[movement] || 0;
        let customCounter = 0;
        let customCounterWall = 2;

        miniCubeModelCopy.forEach((cubesWall, indexWall) => {
            cubesWall.forEach((cube, indexCube) => {
                const invertedWallCounter = miniCubeModelCopy.length - 1 - indexWall
                let actualCube;

                if (movement === 'F' && [0, 3, 6].includes(indexCube)) {
                    actualCube = { ...miniCubeModel[customCounterWall][customCounter] }

                    actualCube.position = cube.position;
                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y - 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'F');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                    customCounterWall--;

                } else if (movement === 'S' && [1, 4, 7].includes(indexCube)) {
                    actualCube = { ...miniCubeModel[customCounterWall][customCounter + 1] }

                    actualCube.position = cube.position;
                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y - 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'F');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                    customCounterWall--;

                } else if (movement === 'D!' && [2, 5, 8].includes(indexCube)) {
                    actualCube = { ...miniCubeModel[customCounterWall][customCounter + 2] }

                    actualCube.position = cube.position;
                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y - 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'F');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                    customCounterWall--;

                }
            })

            customCounter = customCounter + 3;
            customCounterWall = 2;
        })
        miniCubeModel = [...miniCubeModelCopy];
        rePaintCube();
    }


    const moveSecondVariationClockwise = (movement) => {
        const cases = {
            R: 0,
            E: 1,
            L: 2,
        };

        const movementRow = cases[movement] || 0;

        // depth copy of the main model without references.
        let miniCubeModelCopy = miniCubeModel.map((arr) => (
            arr.slice()
        ));

        let count = 6;

        miniCubeModelCopy[movementRow].forEach((cube, indexCube) => {
            let actualCube
            if ([0, 3, 6].includes(indexCube)) {
                actualCube = { ...miniCubeModel[movementRow][count] }
            } else if ([1, 4, 7].includes(indexCube)) {
                actualCube = { ...miniCubeModel[movementRow][count - 4] }
            } else if ([2, 5, 8].includes(indexCube)) {
                actualCube = { ...miniCubeModel[movementRow][count - 7] }
            }

            actualCube.position = cube.position;
            actualCube.hasToRePaint = true;
            actualCube.faces = rotateFaces(actualCube.faces, 'R!');

            miniCubeModelCopy[movementRow][indexCube] = actualCube;


            if (indexCube % 3 === 0) {
                count++;
            }
        })

        miniCubeModel = [...miniCubeModelCopy];
        rePaintCube();
    }

    const moveSecondVariationInverseClockwise = (movement) => {
        const cases = {
            'R!': 0,
            'E!': 1,
            'L!': 2,
        };

        const movementRow = cases[movement] || 0;

        // depth copy of the main model without references.
        let miniCubeModelCopy = miniCubeModel.map((arr) => (
            arr.slice()
        ));

        let count = 2;

        miniCubeModelCopy[movementRow].forEach((cube, indexCube) => {
            let actualCube
            if ([0, 3, 6].includes(indexCube)) {
                actualCube = { ...miniCubeModel[movementRow][count] }
            } else if ([1, 4, 7].includes(indexCube)) {
                actualCube = { ...miniCubeModel[movementRow][count + 4] }
            } else if ([2, 5, 8].includes(indexCube)) {
                actualCube = { ...miniCubeModel[movementRow][count + 7] }
            }

            actualCube.position = cube.position;
            actualCube.hasToRePaint = true;
            actualCube.faces = rotateFaces(actualCube.faces, 'R');

            miniCubeModelCopy[movementRow][indexCube] = actualCube;


            if (indexCube % 3 === 0) {
                count--;
            }
        })

        miniCubeModel = [...miniCubeModelCopy];
        rePaintCube();
    }

    const moveFirtsVariationClockwise = (movement) => {
        // depth copy of the main model without references.
        let miniCubeModelCopy = miniCubeModel.map((arr) => (
            arr.slice()
        ));
        miniCubeModelCopy.forEach((cubesWall, indexWall) => {
            let wallCustomCounter = 2;
            cubesWall.forEach((cube, indexCube) => {
                let actualCube;
                if (movement === 'U' && indexCube < 3) {
                    actualCube = { ...miniCubeModel[wallCustomCounter][indexWall] }

                    wallCustomCounter--;
                    // DEPRECATED
                    actualCube.position = cube.position;
                    // DEPRECATED
                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y + 90 }

                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'U!');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                } else if (movement === 'E' && indexCube >= 3 && indexCube < 6) {
                    actualCube = { ...miniCubeModel[wallCustomCounter][indexWall + 3] }

                    wallCustomCounter--;
                    // DEPRECATED
                    actualCube.position = cube.position;
                    // DEPRECATED

                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y + 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'U!');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                } else if (movement === 'D' && indexCube >= 6) {
                    actualCube = { ...miniCubeModel[wallCustomCounter][indexWall + 6] }

                    wallCustomCounter--;
                    // DEPRECATED
                    actualCube.position = cube.position;
                    // DEPRECATED

                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y + 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'U!');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                }
            })
        })
        miniCubeModel = [...miniCubeModelCopy];
        rePaintCube();
    }

    const moveFirtsVariationInverseClockwise = (movement) => {
        // depth copy of the main model without references.
        let miniCubeModelCopy = miniCubeModel.map((arr) => (
            arr.slice()
        ));

        miniCubeModelCopy.forEach((cubesWall, indexWall) => {
            cubesWall.forEach((cube, indexCube) => {
                const invertedWallCounter = miniCubeModelCopy.length - 1 - indexWall
                let actualCube;
                if (movement === 'U!' && indexCube < 3) {
                    actualCube = { ...miniCubeModel[indexCube][invertedWallCounter] }
                    actualCube.position = cube.position;
                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y - 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'U');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                } else if (movement === 'E!' && indexCube >= 3 && indexCube < 6) {
                    actualCube = { ...miniCubeModel[indexCube - 3][invertedWallCounter + 3] }
                    actualCube.position = cube.position;
                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y - 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'U');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                } else if (movement === 'D!' && indexCube >= 6) {
                    actualCube = { ...miniCubeModel[indexCube - 6][invertedWallCounter + 6] }
                    actualCube.position = cube.position;
                    actualCube.rotation = { ...actualCube.rotation, y: actualCube.rotation.y - 90 }
                    actualCube.hasToRePaint = true;
                    actualCube.faces = rotateFaces(actualCube.faces, 'U');

                    miniCubeModelCopy[indexWall][indexCube] = actualCube;
                }
            })

        })
        miniCubeModel = [...miniCubeModelCopy];
        rePaintCube();
    }


    const rePaintCube = () => {
        const unPaintedMiniCubes = miniCubeModel.flat().filter(miniCube => miniCube.hasToRePaint);
        unPaintedMiniCubes.forEach((miniCube) => {
            const { x: xTranf, y: yTranf, z: zTranf } = miniCube.position
            const { x: xRot, y: yRot, z: zRot } = miniCube.rotation
            miniCube.hasToRePaint = false;

            const $miniCubeElement = document.getElementById(miniCube.name);
            /*   const newTransformStyle = `translate3d(${xTranf}px,${yTranf}px,${zTranf}px)`
              $miniCubeElement.style.transform = newTransformStyle; */
            //gsap.to($miniCubeElement, { duration: 2.5, x: xTranf, y: yTranf, z: zTranf, rotateX: xRot, rotateY: yRot, rotateZ: zRot, ease: "power4.inOut", });

            gsap.to($miniCubeElement, {
                duration: 1.5,
                x: xTranf,
                y: yTranf,
                z: zTranf,
                ease: "back.out(1.7)",
                onComplete: () => {

                }
            });
            /*  miniCube.faces.forEach((currentface, index) => {
                 const { x: xRotFace, y: yRotFace, z: zRotFace } = currentface.rotation
                 console.log(currentface.rotation)
                 const $face = document.getElementById(currentface.id);

                // $face.style.transform = `rotateX(${xRotFace}deg) rotateY(${yRotFace}deg) rotateZ(${zRotFace}deg) translateZ(50px)`;

                /*   gsap.to($face, {
                      duration: 4.5,
                      rotationY: '-=90',
                      ease: "back.out(1.7)",
                      onComplete: () => {

                      }
                  }); 
             }) */

            while ($miniCubeElement.firstChild) $miniCubeElement.removeChild($miniCubeElement.firstChild);
            miniCube.faces.forEach((currentface, index) => {
                const face = document.createElement('div');
                //face.innerHTML = indexMiniCube + 1;
                face.className = `cubic__face cubic__face--${currentface.label}`

                //  face.innerHTML = miniCube.name.replace(/^\D+/g, ''); 

                if (currentface.value) {
                    face.classList.add(`cubic__face--${currentface.value}`)
                    //gsap.to(face, { duration: .1, delay: 1.5, background: currentface.value });

                }


                $miniCubeElement.appendChild(face)
            });
        })

        // Remove all childs 





        /*  if (miniCube.customPaint) {
             $miniCubeElement.style.transform += 'rotate3d(1,0,0,-90deg)';
         } */

    }