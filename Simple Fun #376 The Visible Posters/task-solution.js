const countVisible = (posters) => {
  let w = new Array(1000).fill(0),
    c = 1;
  for (let i = 0; i < posters.length; i++) {
    for (let j = posters[i][0]; j <= posters[i][1]; j++) w[j] = c;
    c++;
  }
  return new Set(w).size - 1;
};
