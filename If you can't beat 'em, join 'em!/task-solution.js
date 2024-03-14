const cantBeatSoJoin = (numbers) =>
  [...numbers]
    .sort((a, b) => b.reduce(getSum, 0) - a.reduce(getSum, 0))
    .reduce((a, sa) => [...a, ...sa], []);

const getSum = (s, v) => s + v;
