function checkAvailability(schedule, currentTime) {
  for (let i = 0; i < schedule.length; i++)
    if (schedule[i][0] <= currentTime && schedule[i][1] > currentTime) return schedule[i][1];
    else if (schedule[i][0] > currentTime) break;
  return true;
}
