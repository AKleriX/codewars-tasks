function findNestedMaximum(arr, max = -Infinity) {
  for (let i = 0; i < arr.length; i++)
    if (Array.isArray(arr[i])) max = findNestedMaximum(arr[i], max);
    else if (max < arr[i]) max = arr[i];
  return max;
}
