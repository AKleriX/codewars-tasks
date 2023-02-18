const shuffleIt = (arr, ...nums) => {
  let currentArr = [...arr];
  for (let i = 0; i < nums.length; i++)
    [currentArr[nums[i][0]], currentArr[nums[i][1]]] = [
      currentArr[nums[i][1]],
      currentArr[nums[i][0]],
    ];
  return currentArr;
};
