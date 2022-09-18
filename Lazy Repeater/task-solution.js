function makeLooper(str) {
  let pos = 0;
  return function () {
    return str[pos++ % str.length];
  };
}
