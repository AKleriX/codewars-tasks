const convertPalindromes = (numbers) =>
  numbers.map((n) => +(n.toString() === [...n.toString()].reverse().join('')));
