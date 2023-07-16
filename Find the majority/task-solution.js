function majority(arr) {
  const counter = arr.reduce((d, el) => ((d[el] = (d[el] || 0) + 1), d), {});
  let max = [null, 0];
  for (let i in counter)
    if (counter[i] > max[1]) max = [i, counter[i]];
    else if (counter[i] === max[1]) max = [null, counter[i]];
  return max[0];
}
