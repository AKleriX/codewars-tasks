export function joust(listField: string[], vKnightLeft: number, vKnightRight: number): string[] {
  let fields: string[] = [...listField];
  while (fields[0].indexOf('>') < fields[1].indexOf('<') && (vKnightLeft > 0 || vKnightRight > 0)) {
    let newLeft: number = fields[0].indexOf('>') + vKnightLeft,
      newRight: number = fields[1].indexOf('<') - vKnightRight;
    fields = [
      ' '.repeat(newLeft - 2) + '$->' + ' '.repeat(fields[0].length - newLeft - 1),
      ' '.repeat(newRight) + '<-P' + ' '.repeat(fields[1].length - newRight - 3),
    ];
  }
  return fields;
}
