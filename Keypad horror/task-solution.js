function computerToPhone(numbers) {
  const dict = [0, 7, 8, 9, 4, 5, 6, 1, 2, 3];
  return [...numbers].map((n) => dict[+n]).join('');
}
