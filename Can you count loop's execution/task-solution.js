const countLoopIterations = (arr) => {
  const res = [];
  let mul = 1n;
  for (let i = 0; i < arr.length; i++) {
    let counter = arr[i][0] + (arr[i][1] ? 1n : 0n) + 1n;
    res.push(mul * counter);
    mul *= --counter;
  }
  return res;
};
