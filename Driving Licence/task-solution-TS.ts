export function driver(data: Array<string>): string {
  let date: Date = new Date(data[3]);
  return (
    (data[2] + '9'.repeat(5)).slice(0, 5) +
    data[3].slice(-2, -1) +
    (data[4] === 'F'
      ? 51 + date.getMonth()
      : date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
    data[3].slice(-1) +
    data[0][0] +
    (data[1].length ? data[1][0] : '9') +
    '9AA'
  ).toUpperCase();
}
