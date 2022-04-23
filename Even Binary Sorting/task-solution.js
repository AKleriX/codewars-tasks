function evenBinary(n) {
  let nums = n.split(' ');
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (!(parseInt(nums[i], 2) % 2) && !(parseInt(nums[j], 2) % 2))
        if (parseInt(nums[i], 2) > parseInt(nums[j], 2)) [nums[i], nums[j]] = [nums[j], nums[i]];
  return nums.join(' ');
}
