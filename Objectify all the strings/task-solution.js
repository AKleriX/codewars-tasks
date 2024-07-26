String.prototype.hashify = function () {
  return [...this].reduce((acc, char, i, arr) => {
    const nextChar = arr[(i + 1) % arr.length];
    acc[char] = acc[char] ? [].concat(acc[char], nextChar) : nextChar;
    return acc;
  }, {});
};
