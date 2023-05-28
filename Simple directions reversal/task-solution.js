const solve = (arr) => {
  const dict = {
    Left: 'Right',
    Right: 'Left',
  };
  return arr
    .map((s) => s.split(' '))
    .reduce(
      (w, [_, ...a], i, ar) => (
        w.push((i < arr.length - 1 ? dict[ar[i + 1][0]] : 'Begin') + ' ' + a.join(' ')), w
      ),
      [],
    )
    .reverse();
};
