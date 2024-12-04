const blackFriday = (year) => {
  const thanksgiving = new Date(year, 10, 1);
  let thursdayCount = 0;

  for (let day = 1; day <= 30; day++) {
    thanksgiving.setDate(day);
    if (thanksgiving.getDay() === 4) {
      thursdayCount++;
      if (thursdayCount === 4) return day + 1;
    }
  }
};
