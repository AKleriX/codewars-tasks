function runningPace(distance, time) {
  let v = distance / time.split(':').reduce((m, s) => +m * 60 + +s),
    t = 1 / v;
  return Math.floor(t / 60) + ':' + addZero(Math.floor(t % 60));
}

const addZero = (n) => (n < 10 ? '0' + n : n);
