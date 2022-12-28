function solve(eq) {
  let parts = eq.split(/[+\-/*]/g),
    fn = eq.match(/[+\-/*]/g) || [],
    res = '';
  for (let i = parts.length - 1; i >= 0; i--) res += parts[i] + (fn[i - 1] || '');
  return res;
}
