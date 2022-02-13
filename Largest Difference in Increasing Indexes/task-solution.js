const largestDifference = function(data) {
  let maxDif = 0;
  for (let i = 0; i < data.length; i++)
    for (let j = i + 1; j < data.length; j++)
      if (data[i] <= data[j] && (j - i) > maxDif) maxDif = j - i;
  return maxDif;
};