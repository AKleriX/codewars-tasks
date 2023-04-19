function redKnight(N, P) {
  let cPos = 0;
  while (cPos < P) {
    P++;
    cPos += 2;
    N = !N;
  }
  return [N ? 'Black' : 'White', cPos];
}
