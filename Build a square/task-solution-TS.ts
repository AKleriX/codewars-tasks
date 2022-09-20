export function generateShape(int: number): string {
  return new Array(int).fill('+'.repeat(int)).join('\n');
}
