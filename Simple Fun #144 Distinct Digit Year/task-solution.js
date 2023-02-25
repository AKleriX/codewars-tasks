function distinctDigitYear(year) {
  let currentYear = year + 1;
  while (new Set(currentYear.toString()).size < currentYear.toString().length) currentYear++;
  return currentYear;
}
