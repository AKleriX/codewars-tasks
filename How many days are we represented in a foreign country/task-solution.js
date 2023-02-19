function daysRepresented(trips) {
  let days = new Set();
  for (let i = 0; i < trips.length; i++)
    for (let j = trips[i][0]; j <= trips[i][1]; j++) days.add(j);
  return days.size;
}
