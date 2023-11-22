const dotsOnDominoBones = (n) => {
  let s = 0;
  for (let i = 0; i <= n; i++) for (let j = i; j <= n; j++) s += i + j;
  return s;
};
