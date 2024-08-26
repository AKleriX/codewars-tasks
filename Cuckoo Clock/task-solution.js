function cuckooClock(inputTime, chimes) {
  let [h, m] = inputTime.split(':').map(Number),
    count = 0;

  const getChimes = (h, m) => (m % 15 === 0 ? (m === 0 ? (h > 12 ? 1 : h) : 1) : 0);

  while (count < chimes) {
    count += getChimes(h, m);
    if (count >= chimes) break;
    m = (m + 1) % 60;
    if (m === 0) h = (h % 12) + 1;
  }

  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
