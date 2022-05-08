function stairs(n) {
  let moving = [],
    nums = '1234567890';
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) row.push(nums[j % 10]);
    moving.push('  '.repeat(n * 2 - row.length * 2) + row.concat([...row].reverse()).join(' '));
  }
  return moving.join('\n');
}
