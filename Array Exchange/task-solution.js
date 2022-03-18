function exchangeWith(a, b) {
  let tempA = [...a];
  for (let i = b.length - 1; i >= 0; i--) a[b.length - 1 - i] = b[i];
  a.length = b.length;
  for (let i = tempA.length - 1; i >= 0; i--) b[tempA.length - 1 - i] = tempA[i];
  b.length = tempA.length;
}
