function lastDayIsFriday(initialYear, endYear = initialYear) {
  let currentDate = new Date(initialYear, 0, 1),
    currentYear = initialYear,
    currentMonth = 0,
    counter = 0;
  while (currentYear <= endYear) {
    currentMonth++;
    if (currentMonth === 12) {
      currentMonth = 0;
      currentYear++;
      currentDate = new Date(currentYear, 0, 1);
    } else currentDate.setMonth(currentMonth);
    if (currentDate.getDay() === 6) counter++;
  }
  return counter;
}
