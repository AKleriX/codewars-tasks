function chooseBestSum(t, k, ls) {
  let bestSum = 0;
  const getBestSum = (towns = [], lastIndex) =>{
    if (towns.length === k){
      let sum = towns.reduce((sum, d) => sum + d);
      if (sum <= t && bestSum < sum)
        bestSum = sum;
      return;
    }
    for (let i = lastIndex + 1 || 0; i < ls.length; i++)
      getBestSum(towns.concat(ls[i]), i);
  }
  getBestSum();
  return bestSum || null;
}