function service(score) {
  let sum = score.split(':').reduce((s, n) => +s + +n),
    step = sum < 40 ? 5 : 2;
  return Math.trunc(sum / step) % 2 ? 'second' : 'first';
}
