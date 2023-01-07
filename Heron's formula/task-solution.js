function heron(a, b, c) {
  let s = (a + b + c) / 2;
  return Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
}
