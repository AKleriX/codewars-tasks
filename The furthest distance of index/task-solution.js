const furthestDistance = (arr, k) => {
  let maxDist = -1;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (Math.abs(arr[i] - arr[j]) >= k) maxDist = Math.max(maxDist, j - i);
  return maxDist;
};
