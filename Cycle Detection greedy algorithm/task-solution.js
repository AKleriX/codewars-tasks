cycle = sequence => {
  let cycleEnd = sequence.findIndex((n, i) => sequence.slice(0, i).indexOf(n) > -1),
      cycleStart = sequence.indexOf(sequence[cycleEnd]);
  return cycleEnd > -1 ? [cycleStart, cycleEnd - cycleStart] : [];
};