function bestParkingSpot(arr) {
  let minLen = Infinity,
    bestIdx = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 'OPEN') {
      let len = getLen(arr, i);
      if (minLen > len) [minLen, bestIdx] = [len, i];
    }
  }
  return bestIdx;
}

const getLen = (arr, idx) => {
  let idxCorral = getIdxCloseCorral(arr, idx);
  return idx * 2 + Math.abs(idxCorral - idx) * 2;
};

const getIdxCloseCorral = (arr, idx) => {
  let left = idx - 1,
    right = idx + 1;
  while (arr[left] !== 'CORRAL' && arr[right] !== 'CORRAL') {
    left--;
    right++;
  }
  return arr[left] === 'CORRAL' ? left : right;
};
