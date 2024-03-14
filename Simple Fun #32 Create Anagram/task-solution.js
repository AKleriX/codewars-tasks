const createAnagram = (s, t) => {
  const counterS = Array.from(new Set([...s, ...t])).reduce(
      (c, l) => ((c[l] = [...s].filter((el) => el === l).length), c),
      {},
    ),
    counterT = Array.from(new Set([...s, ...t])).reduce(
      (c, l) => ((c[l] = [...t].filter((el) => el === l).length), c),
      {},
    );
  let counter = 0;
  for (let l in counterS) counter += Math.abs(counterS[l] - counterT[l]);
  return counter / 2;
};
