function left_riemann(f, n, a, b) {
  let dx = (b - a) / n,
    sum = 0;
  for (let i = 0; i < n; i++) sum += f(i * dx + a);
  return sum * dx;
}
