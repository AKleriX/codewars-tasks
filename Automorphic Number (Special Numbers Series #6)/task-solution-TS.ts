export function automorphic(n: number): string {
  return (n ** 2).toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!';
}
