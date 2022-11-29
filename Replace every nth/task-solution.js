function replaceNth(text, n, oldValue, newValue) {
  let letters = [...text],
    counter = 0;
  for (let i = 0; i < letters.length; i++)
    if (letters[i] === oldValue) {
      counter++;
      if (!(counter % n)) letters[i] = newValue;
    }
  return n < 1 ? text : letters.join('');
}
