export function transposeTwoStrings(arr: string[]): string {
  let rows: string[] = [];
  for (
    let i = 0;
    i <
    Math.max.apply(
      Math,
      arr.map((s) => s.length),
    );
    i++
  )
    rows.push((arr[0][i] || ' ') + ' ' + (arr[1][i] || ' '));
  return rows.join('\n');
}
