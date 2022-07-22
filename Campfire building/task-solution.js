function isConstructable(a) {
  let n = Math.floor(Math.sqrt(a));
  for (let i = 1; i <= n && a >= i ** 2; i--) if (!(Math.sqrt(a - i ** 2) % 1)) return true;
  return false;
}
