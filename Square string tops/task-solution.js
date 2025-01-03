const tops = (msg) => {
  if (!msg) return '';

  let ans = [],
    top = 2,
    step = 5,
    start = 2;

  const n = msg.length;

  while (start < n) {
    ans.push(msg.slice(start, Math.min(start + top, n)));
    start += top;
    top++;
    start += step;
    step += 3;
  }

  return ans.reverse().join('');
};
