function biggest(nums) {
  return nums
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join('')
    .replace(/^0+/, '0');
}
