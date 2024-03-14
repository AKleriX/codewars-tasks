const isThueMorse = (seq) => {
  let currentSeq = [0];
  while (currentSeq.length < seq.length) currentSeq = currentSeq.concat(currentSeq.map((v) => +!v));
  return currentSeq.join('').startsWith(seq.join(''));
};
