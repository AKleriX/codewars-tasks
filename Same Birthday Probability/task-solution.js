const calculateProbability = (n) => {
  let p = 1;

  for (let i = 1; i < n; i++) p *= 1 - i / 365;

  return (1 - p).toFixed(2);
};
