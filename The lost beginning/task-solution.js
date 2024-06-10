const beginning = (xs) => {
  for (let i = 1; i <= xs.length; i++) {
    let n = parseInt(xs.slice(0, i)),
      s = n.toString();
    while (s.length < xs.length) s += (++n).toString();
    if (s === xs) return parseInt(xs.slice(0, i));
  }
  return parseInt(xs);
};
