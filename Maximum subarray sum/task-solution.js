const maxSequence = (arr) => {
  let min = 0, 
      max = 0, 
      sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    min = Math.min(min, sum);
    max = Math.max(max, sum - min);
  }
  return max;
};