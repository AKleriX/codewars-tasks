const oracle = (arr) => {
  const o = ['six', 'five', 'four', 'three', 'two', 'one'],
    r = {
      hhh: '----o----',
      hht: '---- ----',
      htt: '---------',
      ttt: '----x----',
    };
  return arr
    .sort((a, b) => o.indexOf(a[0]) - o.indexOf(b[0]))
    .map((line) => r[line.slice(1).sort().join('')])
    .join('\n');
};
