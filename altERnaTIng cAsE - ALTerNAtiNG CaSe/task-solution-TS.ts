export function toAlternatingCase(s: string): string {
  return s
    .split('')
    .map((s) => (s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()))
    .join('');
}
