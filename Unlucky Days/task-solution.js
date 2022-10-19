function unluckyDays(year) {
  let date = new Date(year, 0, 13),
    counter = 0;
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) counter++;
  }
  return counter;
}
