export const fifo = (n: number, referenceList: number[]): number[] => {
  let p: number[] = new Array(n).fill(-1),
    currentPos: number = 0;
  for (let i: number = 0; i < referenceList.length; i++)
    if (!p.includes(referenceList[i])) {
      p[currentPos] = referenceList[i];
      currentPos = (currentPos + 1) % n;
    }
  return p;
};
