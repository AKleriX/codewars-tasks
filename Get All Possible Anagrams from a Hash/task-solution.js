function getWords(hash) {
  let concat = '';
  for (let key in hash) concat += hash[key].join('').repeat(key);
  return permutation(concat);
}

const permutation = (per) => {
  let res = new Set(),
    currentPer = [...per],
    c = new Array(per.length).fill(0),
    i = 1,
    k = 0;
  res.add(per);
  while (i < per.length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      console.log(k);
      [currentPer[i], currentPer[k]] = [currentPer[k], currentPer[i]];
      c[i]++;
      i = 1;
      res.add(currentPer.join(''));
    } else c[i++] = 0;
  }
  return Array.from(res).sort();
};
