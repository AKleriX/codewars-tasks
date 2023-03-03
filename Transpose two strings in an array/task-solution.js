function transposeTwoStrings(array) {
  let rows = [];
  for (
    let i = 0;
    i <
    Math.max.apply(
      Math,
      array.map((s) => s.length),
    );
    i++
  )
    rows.push((array[0][i] || ' ') + ' ' + (array[1][i] || ' '));
  return rows.join('\n');
}
