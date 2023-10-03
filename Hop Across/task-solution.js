const hopAcross = (lst) => {
  let wayBack = [...lst].reverse(),
    fPos = 0,
    fCounter = 0,
    bPos = 0,
    bCounter = 0;
  while (fPos < lst.length || bPos < wayBack.length) {
    if (fPos < lst.length) {
      fCounter++;
      fPos += lst[fPos];
    }
    if (bPos < wayBack.length) {
      bCounter++;
      bPos += wayBack[bPos];
    }
  }
  return fCounter + bCounter;
};
