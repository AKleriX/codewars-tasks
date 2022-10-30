export const vowelIndices = (word: string): number[] =>
  [...word].reduce(
    (idx: number[], l: string, i: number): number[] =>
      /[aeoiuy]/i.test(l) ? (idx.push(i + 1), idx) : idx,
    [],
  );
