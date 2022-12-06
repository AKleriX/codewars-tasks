const smaller = (nums) => nums.map((n, i) => nums.slice(i + 1).filter((m) => m < n).length);
