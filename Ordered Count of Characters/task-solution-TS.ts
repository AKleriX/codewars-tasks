export function orderedCount(text: string): [string, number][] {
  let counter = new Map<string, number>();
  for (let i = 0; i < text.length; i++) counter.set(text[i], (counter.get(text[i]) || 0) + 1);
  return Array.from(counter);
}
