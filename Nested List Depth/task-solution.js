function arrayDepth(arr, currentDepth = 1, maxDepth = 1) {
  maxDepth = Math.max(currentDepth, maxDepth);
  for (let i = 0; i < arr.length; i++)
    if (Array.isArray(arr[i]))
      maxDepth = Math.max(arrayDepth(arr[i], currentDepth + 1, maxDepth), maxDepth);
  return maxDepth;
}
