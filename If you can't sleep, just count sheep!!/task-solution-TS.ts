export function countSheep(num: number): string {
  return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join('');
}
