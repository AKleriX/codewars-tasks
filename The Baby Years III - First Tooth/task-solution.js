const firstTooth = (t) => {
  let maxDif = -Infinity,
    idx = -1;
  for (let i = 0; i < t.length; i++) {
    let dif = (t[i] - t[i - 1] || 0) + (t[i] - t[i + 1] || 0);
    if (dif > maxDif) {
      maxDif = dif;
      idx = i;
    } else if (maxDif === dif) idx = -1;
  }
  return idx;
};
