function handAngle(date) {
  let m = date.getMinutes(),
    h = (date.getHours() + m / 60) * 5,
    dif = Math.abs(h - m);
  if (dif > 30) dif = Math.min(h, m) + 60 - Math.max(h, m);
  return (dif * 6 * Math.PI) / 180;
}
