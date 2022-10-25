function findNum(n) {
  let uniqNums = new Set([1]),
    nums = Array.from({ length: n + n }, (_, i) => i + 1),
    lastNum = 1;
  while (uniqNums.size < n) {
    let checker = new RegExp('^[^' + lastNum.toString() + ']+$', 'g');
    for (let i = 0; i < nums.length; i++)
      if (!uniqNums.has(nums[i]) && checker.test(nums[i].toString())) {
        lastNum = nums[i];
        uniqNums.add(lastNum);
        break;
      }
  }
  return Array.from(uniqNums).pop();
}
