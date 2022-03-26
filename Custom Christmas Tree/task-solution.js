function customChristmasTree(chars, n) {
  let rowLength = n * 2,
    charPointer = 0,
    tree = [];
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= i; j++) {
      row.push(chars[charPointer]);
      if (++charPointer === chars.length) charPointer = 0;
    }
    row = row.join(' ');
    tree.push(' '.repeat((rowLength - row.length) / 2) + row);
  }
  return (
    tree.join('\n') +
    '\n' +
    Array.from({ length: Math.trunc(n / 3) }, () => ' '.repeat((rowLength - 1) / 2) + '|').join(
      '\n',
    )
  );
}
