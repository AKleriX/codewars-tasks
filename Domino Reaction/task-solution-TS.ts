export function dominoReaction(sequence: string): string {
  return sequence.replace(/^\|+/, (m) => '/'.repeat(m.length));
}
