const add = (...nums) => nums.reduce((s, n, i) => s + n * (i + 1), 0);
