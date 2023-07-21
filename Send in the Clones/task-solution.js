const clonewars = (kataPerDay) => [
  Math.round(2 ** (kataPerDay - 1)),
  Array.from({ length: kataPerDay }, (_, i) => 2 ** i * (kataPerDay - i)).reduce(
    (s, n) => s + n,
    0,
  ),
];
