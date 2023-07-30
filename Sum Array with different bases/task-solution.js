const sumItUp = (numbersWithBases) =>
  numbersWithBases.reduce((s, n) => s + parseInt(n[0], n[1]), 0);
