const timeMath = (time1, op, time2) => {
  const [h1, m1, s1] = time1.split(':').map(Number),
    [h2, m2, s2] = time2.split(':').map(Number);

  let sec1 = h1 * 3600 + m1 * 60 + s1,
    sec2 = h2 * 3600 + m2 * 60 + s2,
    resSec;

  if (op === '+') resSec = sec1 + sec2;
  else resSec = sec1 - sec2;

  resSec = (resSec + 86400) % 86400;

  let resH = Math.floor(resSec / 3600),
    resMin = Math.floor((resSec % 3600) / 60);

  resSec %= 60;

  return [resH, resMin, resSec].map((unit) => String(unit).padStart(2, '0')).join(':');
};
