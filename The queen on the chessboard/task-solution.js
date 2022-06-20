function availableMoves(position) {
  if (!/^[A-H][1-8]$/.test(position)) return [];
  const numToAbc = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
      5: 'E',
      6: 'F',
      7: 'G',
      8: 'H',
    },
    abcToNum = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
    };
  let avalableMoves = new Set();
  avalableMoves.add(position);
  for (let i = 1; i < 9; i++) {
    avalableMoves.add(`${numToAbc[i]}${position[1]}`);
    avalableMoves.add(`${position[0]}${i}`);
    if (abcToNum[position[0]] - i > 0 && position[1] - i > 0)
      avalableMoves.add(`${numToAbc[abcToNum[position[0]] - i]}${position[1] - i}`);
    if (abcToNum[position[0]] + i < 9 && +position[1] + i < 9)
      avalableMoves.add(`${numToAbc[+abcToNum[position[0]] + i]}${+position[1] + i}`);
    if (abcToNum[position[0]] + i < 9 && position[1] - i > 0)
      avalableMoves.add(`${numToAbc[+abcToNum[position[0]] + i]}${position[1] - i}`);
    if (abcToNum[position[0]] - i > 0 && +position[1] + i < 9)
      avalableMoves.add(`${numToAbc[abcToNum[position[0]] - i]}${+position[1] + i}`);
  }
  avalableMoves.delete(position);
  return Array.from(avalableMoves).sort();
}
