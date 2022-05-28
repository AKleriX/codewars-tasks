function fib_rabbits(n, b) {
  let adult = 0,
    immature = 1;
  for (let i = 0; i < n; i++) {
    let tmp = adult;
    adult += immature;
    immature = tmp * b;
  }
  return adult;
}
