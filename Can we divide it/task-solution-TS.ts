export function isDivideBy(number: number, a: number, b: number): boolean {
  return !(number % a) && !(number % b);
}
