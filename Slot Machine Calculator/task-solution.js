function calculateWin(lines) {
  const corLines = lines.map((l) => l.map((s) => (s === '10' ? 'X' : s))),
    valLines = [
      corLines[0][0] + corLines[1][1] + corLines[2][2] + corLines[1][3] + corLines[0][4],
      corLines[2][0] + corLines[1][1] + corLines[0][2] + corLines[1][3] + corLines[2][4],
      corLines[0].join(''),
      corLines[1].join(''),
      corLines[2].join(''),
    ];
  return valLines.reduce((c, l) => {
    let len = (l.match(/^(.)\1*/) || [''])[0].length;
    return c + (len < 3 ? 0 : len === 3 ? 50 : len === 4 ? 150 : 300);
  }, 0);
}
