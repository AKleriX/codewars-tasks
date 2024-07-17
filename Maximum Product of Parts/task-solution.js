const maximumProductOfParts = (n) => {
  let s = n.toString(),
    maxP = 0;

  for (let i = 1; i < s.length - 1; i++)
    for (let j = i + 1; j < s.length; j++) {
      let p1 = parseInt(s.slice(0, i)),
        p2 = parseInt(s.slice(i, j)),
        p3 = parseInt(s.slice(j)),
        p = p1 * p2 * p3;
      maxP = Math.max(maxP, p);
    }

  return maxP;
};
