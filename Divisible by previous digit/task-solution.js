function divisibleByLast(n) {
  let arrDigs = [...n.toString()].map(Number),
    res = [false];
  for (let i = 1; i < arrDigs.length; i++)
    res.push(!(arrDigs[i] % arrDigs[i - 1]) && arrDigs[i - 1] !== 0);
  return res;
}
