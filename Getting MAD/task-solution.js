function getting_mad(arr) {
  let mad = Infinity;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (mad > Math.abs(arr[i] - arr[j])) mad = Math.abs(arr[i] - arr[j]);
  return mad;
}
