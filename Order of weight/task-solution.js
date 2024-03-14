const arrange = (arr) =>
  arr
    .map((w) => [w, getGr(w)])
    .sort((a, b) => a[1] - b[1])
    .map((w) => w[0]);

const getGr = (w) =>
  /KG/.test(w) ? +w.slice(0, -2) * 1000 : /T/.test(w) ? +w.slice(0, -1) * 1000000 : +w.slice(0, -1);
