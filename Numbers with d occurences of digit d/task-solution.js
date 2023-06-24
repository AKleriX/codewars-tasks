const isDd = (n) => {
  const counter = [...n.toString()].reduce((c, d) => ((c[d] = (c[d] | 0) + 1), c), {});
  for (let i in counter) if (counter[i] == i) return true;
  return false;
};
