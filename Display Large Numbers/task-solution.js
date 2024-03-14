const displayLargeNumber = (n) => {
  const res = [...n.toString()]
    .reverse()
    .map((v, i) => (!((i + 1) % 3) ? ',' + v : v))
    .reverse()
    .join('');
  return res[0] === ',' ? res.slice(1) : res;
};
