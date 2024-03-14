const nextDayOfWeek = (currentDay, availableWeekDays) => {
  const alarmDays = [...('0'.repeat(7) + availableWeekDays.toString(2)).slice(-7)]
    .reverse()
    .join('')
    .repeat(2);
  let day = 0;
  for (let i = currentDay; i < alarmDays.length; i++)
    if (alarmDays[i] === '1') {
      day = (i % 7) + 1;
      break;
    }
  return day;
};
