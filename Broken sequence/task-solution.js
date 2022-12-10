function findMissingNumber(sequence) {
  let seq = sequence.split(' ').map(Number),
    nums = new Set(Array.from({ length: Math.max.apply(Math, seq) }, (_, i) => i + 1));
  for (let i = 0; i < seq.length; i++) {
    if (!/\d+/.test(seq[i])) return 1;
    nums.delete(seq[i]);
  }
  return !nums.size ? 0 : Array.from(nums)[0];
}
