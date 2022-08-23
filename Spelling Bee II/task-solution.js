howManyBees = function (hive) {
  if (!hive || !hive.length) return 0;
  let rows = hive.map((r) => r.join('')),
    cols = hive[0].map((_, i) => hive.map((r) => r[i]).join('')),
    diags = [],
    text = '';
  // getting diagonals from the first row
  for (let i = 0; i < hive[0].length; i++) {
    let diagR = '',
      diagL = '';
    for (let j = 0; j < hive.length; j++) {
      if (hive[j][i + j]) diagR += hive[j][i + j];
      if (hive[j][i - j]) diagL += hive[j][i - j];
    }
    diags.push(diagR);
    diags.push(diagL);
  }
  // getting diagonals from the first and last position in each row
  for (let i = 1; i < hive.length; i++) {
    let diagR = '',
      diagL = '';
    for (let j = i, cR = 0, cL = hive[0].length - 1; j < hive.length; j++, cR++, cL--) {
      if (hive[j][cR]) diagR += hive[j][cR];
      if (hive[j][cL]) diagL += hive[j][cL];
    }
    diags.push(diagR);
    diags.push(diagL);
  }
  text = diags.join(' ') + ' ' + rows.join(' ') + ' ' + cols.join(' ');
  return (text.match(/(?=eeb|bee)/g) || []).length;
};
