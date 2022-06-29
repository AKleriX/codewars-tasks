function pattern(n) {
  const nums = '0987654321',
    num = [...n.toString()].pop();
  let output = [];
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) row += nums[(nums.indexOf(num) + j) % 10];
    row += nums[(nums.indexOf(num) + i) % 10].repeat(n - i);
    output.push(row);
  }
  return output.join('\n');
}
