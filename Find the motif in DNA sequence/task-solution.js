const motifLocator = (sequence, motif) => {
  let currentPos = 0,
    resArr = [];
  while (sequence.indexOf(motif, currentPos) > -1) {
    const pos = sequence.indexOf(motif, currentPos) + 1;
    currentPos = pos;
    resArr.push(pos);
  }
  return resArr;
};
