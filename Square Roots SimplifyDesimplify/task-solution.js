function simplify(n) {
  if (Math.sqrt(n) % 1)
    for (let i = 2; i <= n; i++)
      if (!(n % i) && !(Math.sqrt(n / i) % 1))
        return `${Math.sqrt(n / i) > 1 ? Math.sqrt(n / i) + ' ' : ''}sqrt ${i}`;
  return `${Math.sqrt(n)}`;
}

function desimplify(s) {
  let nums = s.split('sqrt').map(Number);
  return nums.length === 1 ? nums[0] ** 2 : (nums[0] || 1) ** 2 * nums[1];
}
