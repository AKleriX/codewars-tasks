const solve = (s) =>
  s
    .replace(/[^aeiou]+/g, ' ')
    .split(' ')
    .sort((a, b) => b.length - a.length)[0].length;
