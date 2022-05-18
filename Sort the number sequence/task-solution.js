function sortSequence(sequence) {
  let seqArrs = [],
    lastZero = -1;
  for (let i = 0; i < sequence.length; i++)
    if (sequence[i] === 0) {
      let temp = sequence.slice(lastZero + 1, i);
      lastZero = i;
      seqArrs.push([temp.sort((a, b) => a - b).concat([0]), temp.reduce((sum, n) => sum + n), i]);
    }
  return seqArrs
    .sort((a, b) => (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]))
    .reduce((arr, seq) => arr.concat(seq[0]), []);
}
