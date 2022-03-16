function trotter(n) {
  if (n === 0) return 'INSOMNIA';
  let digit = new Set(),
    iterator = 1,
    nextN;
  while (digit.size < 10) {
    nextN = n * iterator;
    iterator++;
    let digitStr = nextN.toString().split('');
    for (let i = 0; i < digitStr.length; i++) digit.add(digitStr[i]);
  }
  return nextN;
}
