function explode(x) {
  let nums = x.filter((el) => typeof el === 'number');
  if (!nums.length) return 'Void!';
  let sum = nums.reduce((s, n) => s + n);
  return Array.from({ length: sum }, (_) => [...x]);
}
