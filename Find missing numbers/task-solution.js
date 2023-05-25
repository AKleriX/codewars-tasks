const findMissingNumbers = (arr) =>
  Array.from({ length: arr[arr.length - 1] - arr[0] }, (_, i) => i + arr[0]).filter(
    (n) => !arr.includes(n),
  );
