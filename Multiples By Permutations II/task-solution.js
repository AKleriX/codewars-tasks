function findLowestInt(k) {
  let counter = 1,
    res = null;
  while (!res)
    if (
      [...(counter * k).toString()].sort().join('') ===
      [...(counter * (k + 1)).toString()].sort().join('')
    )
      res = counter;
    else counter++;
  return res;
}
