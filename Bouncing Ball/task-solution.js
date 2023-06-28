function bouncingBall(initial, proportion) {
  let counter = 0;
  while (initial > 1) {
    initial *= proportion;
    counter++;
  }
  return counter;
}
