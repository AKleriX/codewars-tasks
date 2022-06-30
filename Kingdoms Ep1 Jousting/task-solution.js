function joust(listField, vKnightLeft, vKnightRight) {
  let fields = [...listField];
  while (fields[0].indexOf('>') < fields[1].indexOf('<') && (vKnightLeft > 0 || vKnightRight > 0)) {
    let newLeft = fields[0].indexOf('>') + vKnightLeft,
      newRight = fields[1].indexOf('<') - vKnightRight;
    fields = [
      ' '.repeat(newLeft - 2) + '$->' + ' '.repeat(fields[0].length - newLeft - 1),
      ' '.repeat(newRight) + '<-P' + ' '.repeat(fields[1].length - newRight - 3),
    ];
  }
  return fields;
}
