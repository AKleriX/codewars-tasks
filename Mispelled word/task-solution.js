const mispelled = (w1, w2) => {
  let misCounter = 0;
  if (Math.abs(w1.length - w2.length) === 1 && (w2.includes(w1) || w1.includes(w2))) return true;
  for (let i = 0; i < w1.length; i++) if (w1[i] !== w2[i]) misCounter++;
  return misCounter < 2;
};
