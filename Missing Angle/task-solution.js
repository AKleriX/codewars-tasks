function missingAngle(h, a, o) {
  if (o === 0) o = Math.sqrt(Math.abs(a ** 2 - h ** 2));
  else if (a === 0) a = Math.sqrt(Math.abs(o ** 2 - h ** 2));
  return Math.round(Math.atan(o / a) * (180 / Math.PI));
}
