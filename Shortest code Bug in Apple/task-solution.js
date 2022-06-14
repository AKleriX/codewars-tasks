const sc = (a) => a.reduce((r, a, i) => (a.indexOf('B') > -1 ? [i, a.indexOf('B')] : r), []);
