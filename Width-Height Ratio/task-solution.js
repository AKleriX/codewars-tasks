const calculateRatio = (w, h) => {
  let d = Math.min(w, h);
  if (!d) throw new Error('Invalid input!');
  while (d > 1) {
    if (!(w % d) && !(h % d)) {
      w /= d;
      h /= d;
    }
    d--;
  }
  return `${w}:${h}`;
};
