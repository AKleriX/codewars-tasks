function getHints(answer, guess) {
  let ans = answer.map((n) => [n, false]),
    g = guess.map((n) => [n, false]),
    res = { black: 0, white: 0 };
  for (let i = 0; i < g.length; i++)
    if (g[i][0] === ans[i][0]) {
      res.black++;
      ans[i][1] = true;
      g[i][1] = true;
    }
  for (let i = 0; i < g.length; i++)
    if (!g[i][1])
      for (let j = 0; j < ans.length; j++)
        if (g[i][0] === ans[j][0] && !ans[j][1]) {
          res.white++;
          ans[j][1] = true;
          g[i][1] = true;
          break;
        }
  return res;
}
