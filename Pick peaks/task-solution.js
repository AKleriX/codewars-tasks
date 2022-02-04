function pickPeaks(arr){
  let localMax = {pos: [], peaks: []};
  for (let i = 1; i < arr.length - 1; i++)
    if (arr[i - 1] < arr[i]){
      if (arr[i + 1] < arr[i]){
        localMax.pos.push(i);
        localMax.peaks.push(arr[i]);
      }
      else if (arr[i + 1] === arr[i]){
        let iStart = i;
        while (arr[i + 1] === arr[iStart])
          i++;
        if (i + 1 < arr.length && arr[i + 1] < arr[iStart]){
          localMax.pos.push(iStart);
          localMax.peaks.push(arr[iStart]);
        }
      }
    }
  return localMax;
}