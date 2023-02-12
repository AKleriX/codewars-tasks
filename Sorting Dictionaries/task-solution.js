const sortDict = (dict) =>
  Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .map((a) => a.map((v) => (!isNaN(+v) ? +v : v)));
