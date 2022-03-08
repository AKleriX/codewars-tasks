const humanYearsCatYearsDogYears = (humanYears) => {
  return [
    humanYears,
    15 + 9 * (humanYears > 1) + 4 * (humanYears - 2 < 0 ? 0 : humanYears - 2),
    15 + 9 * (humanYears > 1) + 5 * (humanYears - 2 < 0 ? 0 : humanYears - 2),
  ];
};
