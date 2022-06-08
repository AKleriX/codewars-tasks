const greatestDistance = function (data) {
  let uniqNums = new Set(),
    maxDist = 0;
  for (let i = 0; i < data.length; i++)
    if (!uniqNums.has(data[i])) {
      let lastIndex = data.lastIndexOf(data[i]);
      uniqNums.add(data[i]);
      if (maxDist < lastIndex - i) maxDist = lastIndex - i;
    }
  return maxDist;
};
