function averages(numbers) {
  let averArr = [];
  if (!numbers || numbers.length < 2) return averArr;
  for (let i = 1; i < numbers.length; i++) averArr.push((numbers[i - 1] + numbers[i]) / 2);
  return averArr;
}
