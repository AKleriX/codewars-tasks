const pernicious = (n) => {
  const res = [];
  for (let i = 3; i <= Math.floor(n); i++)
    if (isPrime([...i.toString(2)].reduce((s, d) => s + +d, 0))) res.push(i);
  return res.length ? res : 'No pernicious numbers';
};

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
