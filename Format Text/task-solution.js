function format(text, width) {
  let words = text.split(' '),
    rows = [],
    row = [];
  for (let i = 0; i < words.length; i++) {
    row.push(words[i]);
    if (row.join(' ').length > width) {
      rows.push(row.slice(0, -1).join(' '));
      row = [words[i]];
    }
  }
  if (row.length) rows.push(row.join(' '));
  return rows.join('\n');
}
