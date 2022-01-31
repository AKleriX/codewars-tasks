export function rot90Counter(strng: string): string[] {
  let rows: string[] = strng.split('\n'),
      rot90Rows: string[] = [];
  for (let i = rows.length - 1; i >= 0; i--){
    let rot90Row: string = '';
    for (let j = 0; j < rows.length; j++)
      rot90Row += rows[j][i];
    rot90Rows.push(rot90Row);
  }
  return rot90Rows;
}

export function diag2Sym(strng: string): string[] {
  return rot90Counter(strng).map(row => [...row].reverse().join(''));
}

export function selfieDiag2Counterclock(strng: string): string[] {
  let rows = strng.split('\n'),
      rot90Rows = rot90Counter(strng),
      diag2Rows = diag2Sym(strng);
  return rows.map((row, i) => `${row}|${diag2Rows[i]}|${rot90Rows[i]}`);
}

export function oper(fct: (s: string) => string[], s: string): string {
  return fct(s).join('\n');
}