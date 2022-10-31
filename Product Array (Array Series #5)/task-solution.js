function productArray(numbers) {
  const prod = numbers.reduce((mul, n) => mul * n);
  return numbers.map((n) => prod / n);
}
