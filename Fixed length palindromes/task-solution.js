const palin = (a, b) => {
  const start = Math.pow(10, Math.floor((a - 1) / 2)),
    half = (start + b - 1).toString(),
    palindrome =
      half +
      half
        .slice(0, a % 2 ? -1 : half.length)
        .split('')
        .reverse()
        .join('');
  return parseInt(palindrome);
};
