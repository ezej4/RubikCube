const timerContainer = document.getElementById("timer");
const timerTrigger = document.getElementById("timer_trigger");
const timerMoves = document.getElementById("timer_moves");
const timerTime = document.getElementById("timer_time");
const timerStartTrigger = document.getElementById("play_timer");
const timerPauseTrigger = document.getElementById("pause_timer");
const timerStopTrigger = document.getElementById("stop_timer");
const timerLabel = document.getElementById("label_timer");

let isTimerRunning = false;
let isTimerPaused = false;

let timeSeconds = 0;

const animationStepDuration = 4.1;
const animationStepRotation = 15;
const animation = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

const clearTimeVariables = () => {
  COUNT_MOVES = 0;
  timeSeconds = 0;
  isTimerRunning = false;
  isTimerPaused = false;
};

const showTimer = () => {
  timerContainer.classList.toggle("timer--show", TIMER_VISIBLE);
  TIMER_VISIBLE = !TIMER_VISIBLE;
  const label = TIMER_VISIBLE ? "Show timer" : "Hide timer";
  timerLabel.innerHTML = label;
  clearTimeVariables();
};

const starTimer = () => {
  if (isTimerRunning) {
    return;
  }

  isTimerRunning = true;
  isTimerPaused = false;
  initAnimation();

  const interval = setInterval(() => {
    timeSeconds++;

    if (isTimerPaused) {
      clearInterval(interval);
      timeSeconds--;
      return;
    } else if (!isTimerRunning) {
      clearInterval(interval);
      clearTimeVariables();
    }

    if (timeSeconds >= 9999) {
      timeSeconds = 0;
    }
    updateTimerTime();
    updateTimerMoves();
  }, 1000);
};

const updateTimerMoves = () => {
  timerMoves.innerHTML = COUNT_MOVES;
};

const updateTimerTime = () => {
  const formatedTime = String(timeSeconds).padStart(4, 0);
  const [minutesFirst, minutesSecond, secondsFirst, secondsSecond] = formatedTime;
  const finalTime = `${minutesFirst}${minutesSecond}:${secondsFirst}${secondsSecond}`;

  timerTime.innerHTML = finalTime;
};

const stopTimer = () => {
  clearTimeVariables();
  updateTimerMoves();
  updateTimerTime();
  animation.pause();
};

const pauseTimer = () => {
  isTimerPaused = true;
  isTimerRunning = false;
  animation.pause();
};

//tl.staggerTo("#timer_logo", 1.5, { x: "+=10", repeat: -1, repeatDelay: 0.5, force3D: true, ease: Power4.easeOuteaseOut }, 0.15);

const initAnimation = () => {
  animation.to("#timer-arrow", animationStepDuration, { rotation: 360 });

  /*  animation.to("#timer_logo", animationStepDuration, { scale: 1.1 });
  animation.to("#timer_logo", animationStepDuration, { x: -0, rotation: animationStepRotation });
  animation.to("#timer_logo", animationStepDuration, { x: 0, rotation: -animationStepRotation });
  animation.to("#timer_logo", animationStepDuration, { x: -0, rotation: animationStepRotation });
  animation.to("#timer_logo", animationStepDuration, { x: 0, rotation: -animationStepRotation });
  animation.to("#timer_logo", animationStepDuration, { x: -0, rotation: animationStepRotation });
  animation.to("#timer_logo", animationStepDuration, { x: 0, rotation: -animationStepRotation });
  animation.to("#timer_logo", animationStepDuration, { x: -0, rotation: animationStepRotation });
  animation.to("#timer_logo", animationStepDuration, { x: 0, rotation: 0 });
  animation.to("#timer_logo", animationStepDuration, { scale: 1 });
  animation.play(); */
};

timerTrigger.addEventListener("click", showTimer);
timerStopTrigger.addEventListener("click", stopTimer);
timerStartTrigger.addEventListener("click", starTimer);
timerPauseTrigger.addEventListener("click", pauseTimer);
