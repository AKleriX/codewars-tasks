const isTuringEquation = (s) => {
  const funcs = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };
  let nums = s.match(/\d+/g),
    op = s[nums[0].length];
  return (
    funcs[op](+[...nums[0]].reverse().join(''), +[...nums[1]].reverse().join('')) ===
    +[...nums[2]].reverse().join('')
  );
};
