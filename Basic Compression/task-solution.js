const compress = function (str) {
  let letters =
    '[' +
    str
      .match(/(.)\1*/g)
      .map((l) => '[' + l.length + ',' + '"' + l[0] + '"' + ']')
      .join(',') +
    ']';
  return letters.length < str.length ? letters : str;
};

const decompress = function (c) {
  if (/^\[(,?\[\d+,"."\])+\]$/.test(c)) {
    return c
      .slice(1, -1)
      .split('],[')
      .map((data) => {
        let [count, letter] = data.replace(/(^\[)|(\]$)/, '').match(/^(\d+)|(".")$/g);
        return letter[1].repeat(+count);
      })
      .join('');
  }
  return c;
};
