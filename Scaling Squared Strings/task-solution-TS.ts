export const scale = (s: string, k: number, n: number): string =>
  s
    .split('\n')
    .map((r) => {
      let newRow = [...r].map((l) => l.repeat(k)).join('');
      return Array.from({ length: n }, () => newRow).join('\n');
    })
    .join('\n')
    .trim();
