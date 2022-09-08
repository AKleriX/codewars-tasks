export function flip(dir: string, arr: number[]): number[] {
  return [...arr].sort((c1, c2) => (dir === 'R' ? c1 - c2 : c2 - c1));
}
