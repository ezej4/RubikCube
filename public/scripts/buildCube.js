const restoreButton = document.getElementById("restore_button");

const buildCube = () => {
  miniCubeModel.flat().forEach((curMiniCube, indexMiniCube) => {
    const getMiniCubeIndexsById = (id) => {
      if (!id) return;
      let result = null;

      // array every only for break the loop
      miniCubeModel.every((miniCubeRow, indexRow) => {
        const indexMiniCube = miniCubeRow.findIndex((miniCube) => miniCube.name === id);
        // find index in this row
        if (indexMiniCube !== -1) {
          result = [indexRow, indexMiniCube];
          return false;
        }
        return true;
      });
      return result;
    };

    const miniCube = document.createElement("div");
    miniCube.id = curMiniCube.name;
    miniCube.className = "cubic__mini";

    const { x: xTranf, y: yTranf, z: zTranf } = curMiniCube.position;

    curMiniCube.faces.forEach((currentface, index) => {
      const face = document.createElement("div");
      face.id = currentface.id;
      face.className = `cubic__face cubic__face--${currentface.label}`;

      if (currentface.value) {
        const indexs = getMiniCubeIndexsById(curMiniCube.name);
        if (DEBUG_MODE) {
          face.innerHTML = indexs[0] + "-" + indexs[1] + " " + currentface.label;
        }
        face.classList.add(`cubic__face--${currentface.value}`);
        face.classList.add("cubic__face--colored");
      } else {
        face.classList.add("cubic__face--uncolored");
      }

      miniCube.appendChild(face);
    });

    $cubic.appendChild(miniCube);

    gsap.set(`#${miniCube.id}`, {
      x: xTranf,
      y: yTranf,
      z: zTranf,
    });
    
    // this option is valid to
    /*   miniCube.style.transform = `translate3d(${xTranf}px,${yTranf}px,${zTranf}px)`; */
  });
};

buildCube();

const restoreCube = () => {
  let index = USER_MOVES.length - 1;
  const iteraionCount = USER_MOVES.length - 1;

  if (isCubeMoving) return;
  setIntervalX(
    () => {
      const { inverse } = USER_MOVES[index];
      moveCube(inverse, 0.08, true, false);
      index--;
    },
    100,
    iteraionCount,
    () => {
      USER_MOVES = [];
    }
  );
};

restoreButton.addEventListener("click", restoreCube);
