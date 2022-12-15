function solve(s) {
  let sortStr = [...s].sort();
  for (let i = 1; i < sortStr.length; i++)
    if (sortStr[i].charCodeAt() - sortStr[i - 1].charCodeAt() !== 1) return false;
  return true;
}
