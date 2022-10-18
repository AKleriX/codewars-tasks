export const solve = (s: string): number =>
  s
    .replace(/[^aeiou]+/g, ' ')
    .split(' ')
    .sort((a, b) => b.length - a.length)[0].length;
