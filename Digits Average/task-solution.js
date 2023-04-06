function digitsAverage(input) {
  while (input > 9)
    input = +[...input.toString()].reduce(
      (a, n, i, nums) => (i ? a + Math.ceil((+nums[i - 1] + +n) / 2).toString() : a),
      '',
    );
  return input;
}
