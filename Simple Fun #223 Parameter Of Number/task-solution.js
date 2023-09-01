const parameter = (n) =>
  lcm(
    [...n.toString()].reduce((s, d) => s + +d, 0),
    [...n.toString()].reduce((p, d) => p * d, 1),
  );

const lcm = (n1, n2) => {
  let v = Math.max(n1, n2);
  while (v % n1 || v % n2) ++v;
  return v;
};
