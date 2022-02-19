function formatDuration (seconds) {
  let timeCoefs = [365, 24, 60, 60, 1],
      time = [],
      timeName = ['year', 'day', 'hour', 'minute', 'second'];
  if (!seconds) return 'now';
  for (let i = 0; i < 5; i++){
    let coef = timeCoefs.slice(i).reduce((mul, n) => mul * n),
        currentTime = Math.trunc(seconds / coef);
    if (currentTime > 0)
      time.push(`${currentTime} ${currentTime > 1 ? timeName[i] + 's' : timeName[i]}`);    
    seconds -= currentTime * coef;    
  }
  return time.length > 1 ? time.slice(0, -1).join(', ') + ' and ' + time[time.length - 1] : time[0];
}