function danspower(num, power) {
  let resPow = num ** power;
  return resPow % 2 ? Math.round(resPow / 10) * 10 : resPow;
}
