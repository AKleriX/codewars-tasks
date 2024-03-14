const distributeEvenly = (array) => {
  const res = [];
  let counter = array.reduce((c, el) => ((c[el] = (c[el] || 0) + 1), c), {});

  while (res.length < array.length)
    for (let i in counter)
      if (counter[i] > 0) {
        res.push(i);
        counter[i]--;
      }
  return res;
};
