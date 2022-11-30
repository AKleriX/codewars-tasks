function createDict(keys, values) {
  return keys.reduce((d, l, i) => ((d[l] = values[i] === undefined ? null : values[i]), d), {});
}
