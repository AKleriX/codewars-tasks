function meanVsMedian(numbers) {
  let mean = numbers.reduce((s, n) => s + n, 0) / numbers.length,
    median = [...numbers].sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
  return mean < median ? 'median' : mean > median ? 'mean' : 'same';
}
