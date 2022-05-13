function stringsInMaxDepth(s) {
  let maxLev = 0,
    levels = [],
    res = [];
  for (let i = 0; i < s.length; i++)
    if (s[i] === '(') levels.push(i);
    else if (s[i] === ')') {
      if (maxLev < levels.length) {
        maxLev = levels.length;
        res = [];
      }
      if (maxLev === levels.length) res.push(s.slice(levels[levels.length - 1] + 1, i));
      levels.pop();
    }
  return maxLev ? res : [s];
}
