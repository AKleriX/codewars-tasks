function dateNbDays(a0, a, p) {
  let date = new Date('01-01-2016'),
    dayPer = 1 + p / 36000,
    dayCounter = 0;
  while (a0 < a) {
    dayCounter++;
    a0 *= dayPer;
  }
  date.setDate(date.getDate() + dayCounter);
  return date.toLocaleDateString('en-UK').split('/').reverse().join('-');
}
