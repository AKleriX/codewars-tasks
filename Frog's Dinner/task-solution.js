const frogContest = (n) => {
  const chris = sum(n),
    tom = sum(Math.floor(chris / 2)),
    cat = sum(chris + tom);
  return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`;
};

const sum = (n) => (n * (1 + n)) / 2;
