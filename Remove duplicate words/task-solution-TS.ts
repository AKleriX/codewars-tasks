export function removeDuplicateWords(s: string): string {
  return Array.from(new Set(s.split(' '))).join(' ');
}
