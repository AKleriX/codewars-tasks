function equableTriangle(a, b, c) {
  let sp = (a + b + c) / 2;
  return a + b + c === (sp * (sp - a) * (sp - b) * (sp - c)) ** (1 / 2);
}
