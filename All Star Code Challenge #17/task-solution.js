const findYear = (month, dayOfWeek) => {
  for (let year = 2014; year <= 2050; year++)
    if (new Date(year, month, 1).getDay() === dayOfWeek) return year;
  return 0;
};
