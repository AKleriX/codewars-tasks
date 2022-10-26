function pairwise(arr, n) {
  let idxSum = 0,
    indices = new Set();
  for (let i = 0; i < arr.length - 1; i++)
    if (!indices.has(i))
      for (let j = i + 1; j < arr.length; j++)
        if (arr[i] + arr[j] === n && !indices.has(i) && !indices.has(j)) {
          idxSum += i + j;
          indices.add(i);
          indices.add(j);
          break;
        }
  return idxSum;
}
