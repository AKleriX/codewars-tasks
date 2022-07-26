function orderType(arr) {
  let lengths = arr.map((e) => (e === Number(e) ? e.toString().length : e.length)),
    sortLengths = [...lengths].sort((a, b) => a - b),
    strLengths = lengths.join(' ');
  if (sortLengths[0] === sortLengths[sortLengths.length - 1]) return 'Constant';
  return strLengths === sortLengths.join(' ')
    ? 'Increasing'
    : strLengths === sortLengths.reverse().join(' ')
    ? 'Decreasing'
    : 'Unsorted';
}
