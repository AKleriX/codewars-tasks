function sc(screws) {
  let currentScrew = screws[0],
    time = 1;
  for (let i = 1; i < screws.length; i++, time += 2) {
    if (screws[i] !== currentScrew) {
      time += 5;
      currentScrew = screws[i];
    }
  }
  return time;
}
