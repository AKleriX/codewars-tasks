const checkVin = (vin) => {
  const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
    lettersCounter = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      J: 1,
      K: 2,
      L: 3,
      M: 4,
      N: 5,
      P: 7,
      R: 9,
      S: 2,
      T: 3,
      U: 4,
      V: 5,
      W: 6,
      X: 7,
      Y: 8,
      Z: 9,
    };
  let mod = 0;
  if (vin.length !== 17 || [...vin].some((l) => /[IOQ]/.test(l) || /[a-z]/.test(l))) return false;
  mod =
    [...vin].reduce((s, d, i) => s + (/\d/.test(d) ? +d : lettersCounter[d]) * weights[i], 0) % 11;
  return mod === 10 ? vin[8] === 'X' : mod === +vin[8];
};
