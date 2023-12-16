// Fix the sort() method for arrays here.

Array.prototype.sort = function () {
  const s = (a) => {
    if (a.length === 1) return a;
    const h1 = s(a.slice(0, (a.length / 2) | 0)),
      h2 = s(a.slice((a.length / 2) | 0)),
      res = [];
    while (h1.length && h2.length)
      if (h1[0] > h2[0]) res.push(h2.shift());
      else res.push(h1.shift());
    return [...res, ...h1, ...h2];
  };

  return s(this);
};
