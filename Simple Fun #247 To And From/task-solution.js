function toAndFrom(a, b, t) {
  let dist = Math.abs(a - b),
    pos = Math.floor(t / dist),
    add = t % dist;
  if (!(pos % 2)) return a > b ? a - add : a + add;
  return b > a ? b - add : b + add;
}
