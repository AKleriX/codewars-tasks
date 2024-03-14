const isFunction = (pairs) =>
  Object.values(
    pairs.reduce((d, a) => (d[a[0]] ? d[a[0]].add(a[1]) : (d[a[0]] = new Set([a[1]])), d), {}),
  ).every((v) => v.size === 1);
