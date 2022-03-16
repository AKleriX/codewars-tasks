export function trotter(n: number): number | string {
  if (n === 0) return 'INSOMNIA';
  let digit: Set<string> = new Set(),
    iterator: number = 1,
    nextN: number = n;
  while (digit.size < 10) {
    nextN = n * iterator;
    iterator++;
    let digitStr: string[] = nextN.toString().split('');
    for (let i = 0; i < digitStr.length; i++) digit.add(digitStr[i]);
  }
  return nextN;
}
