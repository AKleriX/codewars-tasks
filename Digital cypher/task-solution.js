function encode(str, n) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let nums = [...n.toString()].map(Number),
    letters = [...str];
  return letters.map((l, i) => abc.indexOf(l) + 1 + nums[i % nums.length]);
}
