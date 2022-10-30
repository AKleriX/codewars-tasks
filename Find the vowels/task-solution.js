const vowelIndices = (word) =>
  [...word]
    .map((l, i) => [l, i + 1])
    .filter((d) => /[aeouiy]/i.test(d[0]))
    .map((d) => d[1]);
