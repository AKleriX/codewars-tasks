const scoreToTally = (score) => {
  const dict = ['', 'a', 'b', 'c', 'd', 'e'];
  let res = [];
  while (score > 0) {
    if (score > 5) {
      res.push(dict[5]);
      score -= 5;
    } else {
      res.push(dict[score]);
      score -= score;
    }
  }
  return res.join(' <br>') + (res[res.length - 1] === 'e' ? ' <br>' : '');
};
