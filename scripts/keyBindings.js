const handleKeyDown = (event) => {
  const keyPressed = event.key;
  const keyCases = {
    ArrowUp: () => rotate("top"),
    //'ArrowDown': rotate('top'),
    ArrowLeft: () => rotate("left"),
    ArrowRight: () => rotate("right"),
    u: () => moveCube("U", 0.08),
    U: () => moveCube("U!", 0.08),
    e: () => moveCube("E", 0.08),
    E: () => moveCube("E!", 0.08),
    d: () => moveCube("D", 0.08),
    D: () => moveCube("D!", 0.08),
    r: () => moveCube("R", 0.08),
    R: () => moveCube("R!", 0.08),
    m: () => moveCube("M", 0.08),
    M: () => moveCube("M!", 0.08),
    l: () => moveCube("L", 0.08),
    L: () => moveCube("L!", 0.08),
    f: () => moveCube("F", 0.08),
    F: () => moveCube("F!", 0.08),
    s: () => moveCube("S", 0.08),
    S: () => moveCube("S!", 0.08),
    b: () => moveCube("B", 0.08),
    B: () => moveCube("B!", 0.08),
  };

  const caseToExect = keyCases[keyPressed];
  if (caseToExect) {
    caseToExect();
  }
};

document.addEventListener("keydown", handleKeyDown);
