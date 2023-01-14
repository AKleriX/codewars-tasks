function riders(stations) {
  let counter = 1,
    dist = 0;
  for (let i = 0; i < stations.length; i++) {
    if (dist + stations[i] <= 100) dist += stations[i];
    else {
      dist = stations[i];
      counter += 1;
    }
  }
  return counter;
}
