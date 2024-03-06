const movie_times = (open, close, length) => {
  const res = [];
  let currentMin = open * 60,
    closeMin = close < open ? (24 + close) * 60 : close * 60;
  while (currentMin + length <= closeMin) {
    res.push([((currentMin / 60) | 0) % 24, currentMin % 60]);
    currentMin += length + 15;
  }
  return res;
};
