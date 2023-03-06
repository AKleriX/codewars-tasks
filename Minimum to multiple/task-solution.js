function minimum(a, x) {
  let num = 0;
  while ((a + num) % x !== 0 && (a - num) % x !== 0) num++;
  return num;
}
