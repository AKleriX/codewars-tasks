function polydivisible(x) {
  let numStr = x.toString();
  for (let i = 1; i <= numStr.length; i++) if (+numStr.slice(0, i) % i) return false;
  return true;
}
