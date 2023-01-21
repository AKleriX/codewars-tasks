const completeSeries = (arr, maxNum = Math.max(...arr)) =>
  arr.length === new Set(arr).size ? Array.from({ length: maxNum + 1 }, (_, i) => i) : [0];
