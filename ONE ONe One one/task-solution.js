const consecutiveOnes = (nums) => {
  let maxSeq = 0,
    currentSeq = 0;
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === 1) currentSeq++;
    else {
      maxSeq = maxSeq < currentSeq ? currentSeq : maxSeq;
      currentSeq = 0;
    }
  return currentSeq > maxSeq ? currentSeq : maxSeq;
};
