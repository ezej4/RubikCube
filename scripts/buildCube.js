/*    const getTranslationPostion = (translationsCounters, TRANSLATION_UNITY) => {
       const { xCount, yCount, zCount } = translationsCounters;
       const xTranlation = (xCount) * TRANSLATION_UNITY;
       const yTranlation = (yCount) * TRANSLATION_UNITY;

       if (zCount === 0) {
           zTranlation = TRANSLATION_UNITY;
       } else if (zCount === 1) {
           zTranlation = 0;
       } else if (zCount === 2) {
           zTranlation = -TRANSLATION_UNITY;
       }

       return { xTranlation, yTranlation, zTranlation }
   }

   const { front, left, right, back, top: top2, bottom } = matrix;

   const miniCubesModelv2 = [
       [front[0], left[2], null, null, top2[6], null],
       [front[1], null, null, null, top2[7], null],
       [front[2], null, right[0], null, top2[8], null],
       [front[3], left[5], null, null, null, null],
       [front[4], null, null, null, null, null],
       [front[5], null, right[3], null, null, null],
       [front[6], left[8], null, null, null, bottom[8]],
       [front[7], null, null, null, null, bottom[7]],
       [front[8], null, right[6], null, null, bottom[6]],

       //
       [null, left[1], null, null, top2[3], null],
       [null, null, null, null, top2[4], null],
       [null, null, right[1], null, top2[5], null],
       [null, left[4], null, null, null, null],
       [null, null, null, null, null, null],
       [null, null, right[4], null, null, null],
       [null, left[7], null, null, null, bottom[5]],
       [null, null, null, null, null, bottom[4]],
       [null, null, right[7], null, null, bottom[3]],

       //
       [null, left[0], null, back[2], top2[0], null],
       [null, null, null, back[1], top2[1], null],
       [null, null, right[2], back[0], top2[2], null],
       [null, left[3], null, back[5], null, null],
       [null, null, null, back[4], null, null],
       [null, null, right[5], back[3], null, null],
       [null, left[6], null, back[8], null, bottom[2]],
       [null, null, null, back[7], null, bottom[1]],
       [null, null, right[8], back[6], null, bottom[0]],
   ]

   let cubeCounter = 0;
   let xCount = 0;
   let yCount = 0;
   let zCount = 0;

   while (cubeCounter < AMOUNT_MINI_CUBES) {
       const miniCube = document.createElement('div');
       miniCube.id = `cubic-mini-${cubeCounter+1}`
       miniCube.className = `cubic__mini cubic__mini--${cubeCounter+1}`
       const { xTranlation, yTranlation, zTranlation } = getTranslationPostion({ xCount, yCount, zCount }, TRANSLATION_UNITY);
        miniCube.style.transform = `translate3d(${xTranlation}px,${yTranlation}px,${zTranlation}px)`

       FACE_BY_CUBE.forEach((currentface, index) => {
           const face = document.createElement('div');
           face.innerHTML = cubeCounter;
           face.className = `cubic__face cubic__face--${currentface}`
           const faceColor = miniCubesModelv2[cubeCounter][index];

           if (faceColor) {
               face.classList.add(`cubic__face--${faceColor}`)
           }

           miniCube.appendChild(face)
       });

       if (xCount === 2) {
           if (yCount === 2) {
               zCount++;
               yCount = 0;
           } else {
               yCount++;
           }
           xCount = 0;
       } else {
           xCount++;
       }

       cubeCounter++;
       cubic.appendChild(miniCube);
   } */


miniCubeModel.flat().forEach((curMiniCube, indexMiniCube) => {
    const miniCube = document.createElement('div');
    miniCube.id = curMiniCube.name;
    miniCube.className = "cubic__mini";

    const { x: xTranf, y: yTranf, z: zTranf } = curMiniCube.position;
    const { x: xRot, y: yRot, z: zRot } = curMiniCube.rotation

    miniCube.style.transform = `translate3d(${xTranf}px,${yTranf}px,${zTranf}px) rotateX(${xRot}deg) rotateY(${yRot}deg) rotateZ(${zRot}deg)`;

    curMiniCube.faces.forEach((currentface, index) => {
        const face = document.createElement('div');
       /*  face.innerHTML = indexMiniCube + 1; */
        face.className = `cubic__face cubic__face--${currentface.label}`

        if (currentface.value) {
            face.classList.add(`cubic__face--${currentface.value}`)
        }

        miniCube.appendChild(face)
    });

    cubic.appendChild(miniCube);
})