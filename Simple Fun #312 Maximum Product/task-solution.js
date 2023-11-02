const maximumProduct = (arr) => {
  const p = [],
    sortArr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    let currentP = 1;
    for (let j = 0; j < sortArr.length; j++) if (i !== j) currentP *= sortArr[j];
    p.push(currentP);
  }
  return sortArr[p.indexOf(Math.max(...p))];
};
