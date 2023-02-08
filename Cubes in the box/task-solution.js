function f(x, y, z) {
  let res = Math.min(x, y, z),
    counter = 0;
  for (let i = 0; i < res; i++) counter += (x - i) * (y - i) * (z - i);
  return counter;
}
