function summaryRanges(nums) {
  if (!nums.length) return [];
  let ranges = [[nums[0]]],
    currentNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= currentNum + 1) ranges[ranges.length - 1].push(nums[i]);
    else ranges.push([nums[i]]);
    currentNum = nums[i];
  }
  return ranges.map((r) => {
    let uniqNums = Array.from(new Set(r));
    return uniqNums.length === 1
      ? uniqNums[0].toString()
      : uniqNums[0].toString() + '->' + uniqNums[uniqNums.length - 1].toString();
  });
}
