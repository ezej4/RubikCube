const getActualRotation = () => {
  const baseStyle = $cubic.style.transform;

  if (!baseStyle)
    return {
      x: 0,
      y: 0,
    };

  // grab all positive and negative numbers.
  const regex = /[-?\d|,|.\+]+/g;
  // grab all matches
  const values = baseStyle.match(regex);

  return {
    x: parseFloat(values[0]),
    y: parseFloat(values[1]),
  };
};

const rotate = (direction) => {
  //if grabbing is enabled, disable it
  if (isGrabbing) {
    switchGrabbing();
  }

  if (!$cubic.classList.contains("cubic--auto-roting")) {
    $cubic.classList.add("cubic--auto-roting");
  }

  // get the actual rotation
  const { x: xRotation, y: yRotation } = getActualRotation();

  let rotationStyle;
  switch (direction) {
    case "left": {
      rotationStyle = isCubeInvertedX
        ? `rotateX(${xRotation}deg) rotateY(${yRotation - 90}deg)`
        : `rotateX(${xRotation}deg) rotateY(${yRotation + 90}deg)`;

      const newRotationY = cubePosition.y + 90 > 360 ? cubePosition.y + 90 - 360 : cubePosition.y + 90;
      cubePosition = { ...cubePosition, y: newRotationY };
      isCubeInvertedY = cubePosition.y === 270;
      break;
    }
    case "right": {
      rotationStyle = isCubeInvertedX
        ? `rotateX(${xRotation}deg) rotateY(${yRotation + 90}deg)`
        : `rotateX(${xRotation}deg) rotateY(${yRotation - 90}deg)`;

      const newRotationY = cubePosition.y - 90 < 0 ? cubePosition.y - 90 + 360 : cubePosition.y - 90;
      cubePosition = { ...cubePosition, y: newRotationY };
      isCubeInvertedY = cubePosition.y === 270;
      break;
    }
    case "top": {
      rotationStyle = `rotateX(${xRotation + 180}deg) rotateY(${yRotation}deg)`;
      const newRotationX = cubePosition.x + 180 >= 360 ? cubePosition.x + 180 - 360 : cubePosition.x + 180;
      cubePosition = { ...cubePosition, x: newRotationX };
      isCubeInvertedX = cubePosition.x === 180;
      break;
    }
    default: {
      rotationStyle = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      break;
    }
  }
 
  $cubic.style.transform = rotationStyle;
};
