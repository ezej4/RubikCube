const $mixCubegButton = document.getElementById("mix-button");

const getRandomMove = () => {
  const movesCopy = { ...MOVES };
  var result;
  var count = 0;
  for (var prop in movesCopy) if (Math.random() < 1 / ++count) result = prop;
  return result;
};

const setIntervalX = (callback, delay, repetitions, callbackFinish = () => {}) => {
  let x = 0;
  const intervalID = window.setInterval(function () {
    callback();

    if (x === repetitions) {
      window.clearInterval(intervalID);
      callbackFinish();
    }
    x++;
  }, delay);
};

const handleMixCubeClick = () => {
  const amountOfMixins = 20;
  setIntervalX(
    () => {
      const aleatoryMove = getRandomMove();
      moveCube(aleatoryMove, 0.08, true);
      USER_MOVES.push({ ...MOVES[aleatoryMove], isAuto: true });
    },
    100,
    amountOfMixins,
  );
};

$mixCubegButton.addEventListener("click", handleMixCubeClick, false);
