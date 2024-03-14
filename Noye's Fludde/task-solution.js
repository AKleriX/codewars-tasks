const boatLoader = (a) => {
  const counter = a.reduce((c, v) => ((c[v] = (c[v] ? c[v] : 0) + 1), c), {}),
    res = [];
  for (let v in counter) if (/^[a-z]$/i.test(v) && counter[v] >= 2) res.push([v, v]);
  return res.sort((a, b) =>
    a[0].toLowerCase() === b[0].toLowerCase()
      ? a[0].charCodeAt(0) - b[0].charCodeAt(0)
      : a[0].toLowerCase().charCodeAt(0) - b[0].toLowerCase().charCodeAt(0),
  );
};
