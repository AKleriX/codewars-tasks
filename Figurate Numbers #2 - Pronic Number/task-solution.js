function isPronic(n) {
  let fSq = Math.floor(Math.sqrt(n));
  return fSq * (fSq + 1) === n;
}
