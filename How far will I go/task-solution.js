const Kata_travel = (totalTime, runTime, restTime, speed) => {
  let len = 0;
  while (totalTime > 0) {
    len += totalTime > runTime ? runTime : totalTime;
    totalTime -= runTime + restTime;
  }
  return len * speed;
};
