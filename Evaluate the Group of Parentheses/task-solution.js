const evalParentheses = (parens) => {
  let res = [];
  for (let c of parens) {
    if (c === '(') res.push(0);
    else {
      let val = 0;
      while (res[res.length - 1] !== 0) val += res.pop();
      res.pop();
      res.push(Math.max(2 * val, 1));
    }
  }
  return res.reduce((a, b) => a + b, 0);
};
