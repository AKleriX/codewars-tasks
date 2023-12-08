const daysUntilChristmas = (days) => {
  let dayOfChristmas = new Date(days.getFullYear(), 11, 25);
  if (dayOfChristmas < days) dayOfChristmas = new Date(days.getFullYear() + 1, 11, 25);
  return Math.ceil(Math.abs(dayOfChristmas.getTime() - days.getTime()) / (1000 * 3600 * 24));
};
