function battle(x, y) {
  let firstPow = [...x].reduce((p, l) => p + (l.charCodeAt() - 64), 0),
    secondPow = [...y].reduce((p, l) => p + (l.charCodeAt() - 64), 0);
  return firstPow > secondPow ? x : firstPow < secondPow ? y : 'Tie!';
}
