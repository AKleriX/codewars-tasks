function calculate(string) {
  let nums = string.match(/\d+/g);
  return string.includes('gains') ? +nums[0] + +nums[1] : +nums[0] - +nums[1];
}
