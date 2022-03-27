function zeroPlentiful(arr) {
  const zeroSeq = arr.join('').match(/(0)\1*/g);
  return zeroSeq && zeroSeq.every((seq) => seq.length >= 4) ? zeroSeq.length : 0;
}
