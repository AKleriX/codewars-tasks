const solution = (str) =>
  str
    .slice(str.indexOf('?') + 1)
    .split('&')
    .reduce((d, v) => ((d[v.split('=')[0]] = v.split('=')[1]), d), {});
