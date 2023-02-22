var Calculator = {
  average: function (...nums) {
    return nums.length ? nums.reduce((s, n) => s + n) / nums.length : 0;
  },
};
