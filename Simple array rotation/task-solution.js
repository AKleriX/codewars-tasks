function solve(arr) {
  let sortArr = [...arr].sort((a, b) => a - b);
  if (sortArr.join(' ') === arr.join(' ')) return 'A';
  if (sortArr.reverse().join(' ') === arr.join(' ')) return 'D';
  if (arr[0] > arr[arr.length - 1]) return 'RA';
  return 'RD';
}
