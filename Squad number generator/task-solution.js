const generateNumber = (squad, n) => (squad.includes(n) ? getNum(squad, n) : n);

const getNum = (squad, n) => {
  for (let i = 1; i < Math.min(10, n); i++)
    if (n - i < 10 && !squad.includes(+('' + i + (n - i)))) return +('' + i + (n - i));
  return null;
};
