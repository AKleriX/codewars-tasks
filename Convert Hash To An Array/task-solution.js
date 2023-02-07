const convertHashToArray = (hash) =>
  Object.keys(hash)
    .sort()
    .map((p) => [p, hash[p]]);
