export function wordPattern(word: string): string {
  let sIdx: { [key: string]: number } = {},
    pattern: number[] = [];
  for (let i = 0, c = 0; i < word.length; i++) {
    if (!sIdx.hasOwnProperty(word[i].toLowerCase())) sIdx[word[i].toLowerCase()] = c++;
    pattern.push(sIdx[word[i].toLowerCase()]);
  }
  return pattern.join('.');
}
