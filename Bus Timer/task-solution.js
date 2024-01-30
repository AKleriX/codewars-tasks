const busTimer = (time) => {
  const [h, m] = time.split(':').map(Number);
  if (time > '23:55' || time <= '05:55')
    return time > '23:55' ? 60 - m + 5 * 60 + 55 : 5 * 60 + 55 - (h * 60 + m);
  return m > 55 ? 60 - m + 10 : m < 11 ? 10 - m : m < 26 ? 25 - m : m < 41 ? 40 - m : 55 - m;
};
