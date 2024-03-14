const fifo = (n, referenceList) => {
  let p = new Array(n).fill(-1),
    currentPos = 0;
  for (let i = 0; i < referenceList.length; i++)
    if (!p.includes(referenceList[i])) {
      p[currentPos] = referenceList[i];
      currentPos = (currentPos + 1) % n;
    }
  return p;
};
