const predict = (candidates, polls) => {
  let sums = new Array(candidates.length).fill(0),
    totalWeight = 0;

  for (let [results, weight] of polls) {
    totalWeight += weight;
    for (let i = 0; i < results.length; i++) sums[i] += results[i] * weight;
  }

  let result = {};
  for (let i = 0; i < candidates.length; i++)
    result[candidates[i]] = +(sums[i] / totalWeight).toFixed(1);

  return result;
};
