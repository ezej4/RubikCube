const originMousePosition = {
  pageX: 0,
  pageY: 0,
  isSetted: false,
};

const originFingerPosition = {
  pageX: 0,
  pageY: 0,
  isSetted: false,
};

let $implicatedMiniCubes = [];
let proximityMoves = [];
let direction = "";
let move = null;
let isMovingNow = false;

// mouse movements function.
const getFace = (classList) => {
  const formatedClassList = Array.from(classList);
  const filteredClassList = formatedClassList.filter((className) => {
    return className.includes("cubic__face--");
  });
  return filteredClassList[0].split("--")[1];
};

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

const getProximityMovements = (cubeId, face) => {
  if (!cubeId || !face) return;

  const cubeIndexs = getMiniCubeIndexsById(cubeId);
  const { x, y } = cubePosition;
  console.log(cubeIndexs, x, y);

  const movesForCubeRotation = MOUSE_MOVEMENTS.find((element) => {
    return element.xAngle === x && element.yAngle === y;
  });

  const miniCubeManualMovement = movesForCubeRotation.value.find((miniCube) => {
    return miniCube.miniCube[0] === cubeIndexs[0] && miniCube.miniCube[1] === cubeIndexs[1];
  });

  return miniCubeManualMovement.proximityMoves[face];
};

const getMouseDirection = ({ originPosition, currentPosition }) => {
  const { pageX: xOrigin, pageY: yOrigin } = originPosition;
  const { pageX: xCurrent, pageY: yCurrent } = currentPosition;

  const xDisplacement = xOrigin - xCurrent;
  const yDisplacement = yOrigin - yCurrent;

  let direction = null;

  if (Math.abs(xDisplacement) > Math.abs(yDisplacement)) {
    if (xDisplacement < 0) {
      direction = "right";
    } else direction = "left";
  } else {
    if (yDisplacement < 0) {
      direction = "bottom";
    } else direction = "top";
  }

  return { direction, xDisplacement, yDisplacement };
};

const resetVariables = () => {
  //movesElementsToAnotherParent($implicatedMiniCubes, $cubic)
  $implicatedMiniCubes = [];
  originMousePosition.isSetted = false;
  originFingerPosition.isSetted = false;
  move = null;
  isMovingNow = false;
  direction = "";
  removeEvents();
};

const getRotations = ({ pageX, pageY }) => {
  const aceleration = IS_MOBILE ? 30 : 100;
  const results = { x: 0, y: 0, z: 0 };
  let xRotation = 0;
  let yRotation = 0;
  let zRotation = 0;

  if (!move) {
    return results;
  }

  if (move.rotation.x !== 0) {
    yRotation = ((originMousePosition.pageY - pageY) / $cubicPlain.offsetHeight) * aceleration;

    if (proximityMoves.invertedY) {
      yRotation = ((pageY - originMousePosition.pageY) / $cubicPlain.offsetHeight) * aceleration;
    }

    return { ...results, x: yRotation };
  } else if (move.rotation.y !== 0) {
    xRotation = ((pageX - originMousePosition.pageX) / $cubicPlain.offsetWidth) * aceleration;

    return { ...results, y: xRotation };
  } else if (move.rotation.z !== 0) {
    zRotation = ((originMousePosition.pageY - pageY) / $cubicPlain.offsetHeight) * aceleration;

    if (proximityMoves.invertedZ) {
      zRotation = ((pageY - originMousePosition.pageY) / $cubicPlain.offsetHeight) * aceleration;
    }
    return { ...results, z: zRotation };
  }
};

const hasMinimunMoveMouse = (xDisplacement, yDisplacement, direction) => {
  const minimalMove = IS_MOBILE ? 20 : 100;

  if (direction === "left" || direction === "right") {
    return Math.abs(xDisplacement) > minimalMove;
  }

  return Math.abs(yDisplacement) > minimalMove;
};

const hasInTheSamePosition = (event) => {
  const { changedTouches, pageX, pageY } = event;

  if (IS_MOBILE) {
    originFingerPosition.pageX === changedTouches[0].pageX && originFingerPosition.pageY === changedTouches[0].pageY;
  } else {
    originMousePosition.pageX === pageX && originMousePosition.pageY === pageY;
  }
};

const setOriginPosition = (event) => {
  const { changedTouches, pageX, pageY } = event;
  if (IS_MOBILE) {
    originFingerPosition.pageX = changedTouches[0].pageX;
    originFingerPosition.pageY = changedTouches[0].pageY;
    originFingerPosition.isSetted = true;
  } else {
    originMousePosition.pageX = pageX;
    originMousePosition.pageY = pageY;
    originMousePosition.isSetted = true;
  }
};

const registerEvents = () => {
  if (IS_MOBILE) {
    selectedArea.addEventListener("touchmove", mouseMoveHandler);
    selectedArea.addEventListener("touchend", mouseUpHandler);
    selectedArea.addEventListener("touchcancel", mouseUpHandler);
  } else {
    selectedArea.addEventListener("mousemove", mouseMoveHandler);
    selectedArea.addEventListener("mouseleave", mouseUpHandler);
    selectedArea.addEventListener("mouseup", mouseUpHandler);
  }
};

const removeEvents = () => {
  if (IS_MOBILE) {
    selectedArea.removeEventListener("touchmove", mouseMoveHandler);
    selectedArea.removeEventListener("touchleave", mouseUpHandler);
    selectedArea.removeEventListener("touchcancel", mouseUpHandler);
  } else {
    selectedArea.removeEventListener("mousemove", mouseMoveHandler);
    selectedArea.removeEventListener("mouseleave", mouseUpHandler);
    selectedArea.removeEventListener("mouseup", mouseUpHandler);
  }
};

const mouseDownHandler = (event) => {
  event.preventDefault();

  const { target } = event;

  if (!target.classList.contains("cubic__face") || isMovingNow) {
    resetVariables();
    return;
  }

  isMovingNow = true;
  const cubeId = target.parentElement.id;
  const face = getFace(target.classList);
  proximityMoves = getProximityMovements(cubeId, face);

  registerEvents();
};

const mouseMoveHandler = (event) => {
  const { changedTouches, pageX, pageY } = event;
  const currentPosition = IS_MOBILE ? { pageX: changedTouches[0].pageX, pageY: changedTouches[0].pageY } : { pageX, pageY };

  const originPosition = IS_MOBILE ? originFingerPosition : originMousePosition;
  //var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];

  if (hasInTheSamePosition(event)) return;

  if (IS_MOBILE && !originFingerPosition.isSetted) {
    setOriginPosition(event);
    return;
  }
  if (!IS_MOBILE && !originMousePosition.isSetted) {
    setOriginPosition(event);
    return;
  }

  // here to continue
  if (!move) {
    const { direction: detectedDirection } = getMouseDirection({
      originPosition,
      currentPosition,
    });

    direction = detectedDirection;

    const detectedMove = proximityMoves[direction];

    move = MOVES[detectedMove];

    $implicatedMiniCubes = move.implicatedMiniCubes.map(({ element }) => {
      const [firstIndex, secondIndex] = element;
      const miniCube = miniCubeModel[firstIndex][secondIndex];

      return document.getElementById(miniCube.name);
    });
    movesElementsToAnotherParent($implicatedMiniCubes, $cubicPlain);
    return;
  }

  const { x, y, z } = getRotations(currentPosition);

  gsap.to($cubicPlain, 0.3, {
    rotationY: y,
    rotationZ: z,
    rotationX: x,
    //ease: "Power1.easeOut",
  });
};

const mouseUpHandler = (event) => {
  selectedArea.removeEventListener("mousemove", mouseMoveHandler);
  const { changedTouches, pageX, pageY } = event;
  const currentPosition = IS_MOBILE ? { pageX: changedTouches[0].pageX, pageY: changedTouches[0].pageY } : { pageX, pageY };

  const originPosition = IS_MOBILE ? originFingerPosition : originMousePosition;

  if (!originPosition || !move) {
    resetVariables();
    return;
  }

  const { xDisplacement, yDisplacement } = getMouseDirection({ originPosition, currentPosition });

  const isMouseMoveEnough = hasMinimunMoveMouse(xDisplacement, yDisplacement, direction);

  if (!isMouseMoveEnough) {
    gsap.to($cubicPlain, {
      duration: 0.3,
      rotationY: 0,
      rotationX: 0,
      rotationZ: 0,
      clearProps: "all",
      onComplete: () => {
        movesElementsToAnotherParent($implicatedMiniCubes, $cubic);
        isMovingNow = false;
        resetVariables();
      },
    });

    return;
  }

  let moveToExec = "";

  switch (direction) {
    case "right": {
      moveToExec = xDisplacement < 0 ? move.name : move.inverse;
      break;
    }
    case "left": {
      moveToExec = xDisplacement > 0 ? move.name : move.inverse;
      break;
    }
    case "top": {
      moveToExec = yDisplacement > 0 ? move.name : move.inverse;
      break;
    }
    case "bottom": {
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
};

if (IS_MOBILE) {
  selectedArea.addEventListener("touchstart", mouseDownHandler);
} else {
  selectedArea.addEventListener("mousedown", mouseDownHandler);
}
