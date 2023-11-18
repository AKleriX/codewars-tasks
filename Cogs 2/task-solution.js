const cogRpm = (cogs, n) => {
  let l = cogs.slice(0, n + 1).reverse(),
    r = cogs.slice(n);
  return [
    l.reduce(getSpeed, 1) * (l.length % 2 ? 1 : -1),
    r.reduce(getSpeed, 1) * (r.length % 2 ? 1 : -1),
  ];
};

const getSpeed = (speed, cog, idx, cogs) => (!idx ? speed : (cogs[idx - 1] / cogs[idx]) * speed);
