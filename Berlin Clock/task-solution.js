function berlinClock(time) {
  let berlinClock = [],
    [hours, mins, secs] = time.split(':').map(Number);
  berlinClock[0] = secs % 2 ? 'O' : 'Y';
  berlinClock[1] = 'R'.repeat(Math.floor(hours / 5)) + 'O'.repeat(4 - Math.floor(hours / 5));
  berlinClock[2] = 'R'.repeat(hours % 5) + 'O'.repeat(4 - (hours % 5));
  berlinClock[3] = Array.from({ length: 11 }, (_, i) =>
    i + 1 <= Math.floor(mins / 5) ? ((i + 1) % 3 ? 'Y' : 'R') : 'O',
  ).join('');
  berlinClock[4] = 'Y'.repeat(mins % 5) + 'O'.repeat(4 - (mins % 5));
  return berlinClock.join('\n');
}
