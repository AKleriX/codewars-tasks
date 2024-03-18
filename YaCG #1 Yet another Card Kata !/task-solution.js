const winnerOfTrick = (cards, players) => {
  let nums = cards.map((c) =>
      /\d/.test(c[0]) ? +c[0] : { T: 10, J: 11, Q: 12, K: 13, A: 14 }[c[0]],
    ),
    maxNum = Math.max(...nums),
    maxNums = nums.filter((v) => v === maxNum);
  return maxNums.length > 1
    ? 'Tie! (' + players.filter((_, i) => nums[i] === maxNum).join(',') + ')'
    : players[nums.indexOf(maxNum)] + ' wins';
};
