const changeTime = (input, delta) => {
  let [h, m] = input.split(':').map(Number);
  m += delta;
  if (m > 59) {
    m = 0;
    h += 1;
  }
  if (m < 0) {
    m = 59;
    h -= 1;
  }
  if (h > 23) h = 0;
  if (h < 0) h = 23;
  return `${('0' + h).slice(-2)}:${('0' + m).slice(-2)}`;
};
