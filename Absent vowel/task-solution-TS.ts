export const absentVowel = (x: string): number =>
  ['a', 'e', 'i', 'o', 'u'].findIndex((v) => !x.includes(v));
