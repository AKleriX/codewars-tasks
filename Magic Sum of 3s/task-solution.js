const magicSum = (numbers) =>
  numbers.reduce((s, n) => s + (n % 2 && /3/.test(n.toString()) ? n : 0), 0);
