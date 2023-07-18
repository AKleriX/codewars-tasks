function speedify(input) {
  let letters = [...input].map((l) => [l, false]);
  for (let i = 0; i < input.length; i++) {
    if (!letters[i][1]) letters[i] = [' ', false];
    letters[i + input.charCodeAt(i) - 65] = [input[i], true];
  }
  for (let i = 0; i < letters.length; i++) if (!letters[i]) letters[i] = [' ', false];
  return letters.map((l) => l[0] || ' ').join('');
}
