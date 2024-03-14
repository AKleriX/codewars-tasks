const buildFun = (n) => {
  const res = [];

  for (let i = 0; i < n; i++) res.push(() => i);

  return res;
};
