function counterEffect(hitCount) {
  let res = [];
  for (let i = 0; i < hitCount.length; i++)
    res.push(Array.from({ length: +hitCount[i] + 1 }, (_, i) => i));
  return res;
}
