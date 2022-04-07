function reverseFizzBuzz(array) {
  let nums = [0, 0],
    iterator = 0;
  while (nums[0] === 0 || nums[1] === 0) {
    if ((array[iterator] + '').includes('Fizz') && nums[0] === 0) nums[0] = iterator + 1;
    if ((array[iterator] + '').includes('Buzz') && nums[1] === 0) nums[1] = iterator + 1;
    iterator++;
  }
  return nums;
}
