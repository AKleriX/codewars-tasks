const haikuWizard = (arr) =>
  arr.map((r) => r.map((w) => words[((w / 10) | 0) - 1][w % 10]).join(' ')).join('\n');
