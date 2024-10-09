const customFib = (signature, indexes, n) => {
  if (n < signature.length) return signature[n];

  let sequence = [...signature];

  while (sequence.length <= n) {
    let nextValue = indexes.reduce(
      (sum, idx) => sum + sequence[sequence.length - signature.length + idx],
      0,
    );
    sequence.push(nextValue);
  }

  return sequence[n];
};
