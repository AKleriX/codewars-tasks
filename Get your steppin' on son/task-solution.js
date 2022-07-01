function wordStep(str) {
  let words = str.split(' '),
    w = 0,
    wc = 0,
    h = 0,
    hc = 0,
    x = 0,
    y = 0;
  for (let i = 0; i < words.length; i++)
    if (!(i % 2)) {
      w += words[i].length;
      wc++;
    } else {
      h += words[i].length;
      hc++;
    }
  let arr = Array.from({ length: h - Math.floor(words.length / 2) + 1 }, () =>
    Array.from({ length: w - Math.ceil(words.length / 2) + 1 }, () => ' '),
  );
  arr[0][0] = words[0][0];
  for (let i = 0; i < words.length; i++) {
    for (let j = 1; j < words[i].length; j++)
      if (!(i % 2)) arr[y][++x] = words[i][j];
      else arr[++y][x] = words[i][j];
  }
  return arr;
}
