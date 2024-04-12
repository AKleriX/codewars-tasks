const uniDecoder = (...nums) => {
  let str = nums.filter((n) => n < 200 && n > 0).map((n) => String.fromCharCode(n));
  return !str.length ? 'not a valid character code' : str.join('');
};
