const countGrade = (scores) => ({
  S: scores.filter((n) => n === 100).length,
  A: scores.filter((n) => n < 100 && n >= 90).length,
  B: scores.filter((n) => n < 90 && n >= 80).length,
  C: scores.filter((n) => n < 80 && n >= 60).length,
  D: scores.filter((n) => n < 60 && n >= 0).length,
  X: scores.filter((n) => n === -1).length,
});
