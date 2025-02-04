const isHappy = (n, pow) => {
  let history = [];

  while (!history.includes(n)) {
    history.push(n);
    n = [...String(n)].reduce((sum, d) => sum + d ** pow, 0);
    if (n === 1) return [1];
  }

  return history.slice(history.indexOf(n)).concat(n);
};
