function nameScore(name) {
  let score = 0;
  for (let i = 0; i < name.length; i++)
    for (let letters in alpha) if (letters.includes(name[i].toUpperCase())) score += alpha[letters];
  return Object.defineProperty({}, name, { value: score, enumerable: true });
}
