function findNumber(compare) {
  let nums = [],
    dec = 0;
  for (let i = 0; i <= 100; i++)
    if (!compare(i)) {
      nums.push(i);
      break;
    } else if (compare(i) === 1) {
      nums.push(i - 1);
      break;
    }
  while (compare(+(nums[0] + '.' + zerosAdd(dec))) === -1) dec++;
  return +(nums[0] + '.' + zerosAdd(dec));
}

const zerosAdd = (n) => '0'.repeat(5 - n.toString().length) + n;
