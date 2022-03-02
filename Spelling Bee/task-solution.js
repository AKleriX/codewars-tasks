const howManyBees = function (hive) {
  if (!hive || hive.length < 1) return 0;
  let rows = hive.map((r) => r.join('')).join('\n'),
    cols = [],
    beesCounter = 0;
  for (let i = 0; i < hive[0].length; i++) {
    cols[i] = '';
    for (let j = 0; j < hive.length; j++) cols[i] += hive[j][i];
  }
  cols = cols.join('\n');
  for (let i = 0; i < rows.length; i++)
    if (rows[i] === 'b') {
      if (i > 1 && rows[i - 1] === 'e' && rows[i - 2] === 'e') beesCounter++;
      if (i < rows.length - 2 && rows[i + 1] === 'e' && rows[i + 2] === 'e') beesCounter++;
    }
  for (let i = 0; i < cols.length; i++)
    if (cols[i] === 'b') {
      if (i > 1 && cols[i - 1] === 'e' && cols[i - 2] === 'e') beesCounter++;
      if (i < cols.length - 2 && cols[i + 1] === 'e' && cols[i + 2] === 'e') beesCounter++;
    }
  return beesCounter;
};
