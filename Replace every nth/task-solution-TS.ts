export function replaceNth(text: string, n: number, oldValue: string, newValue: string): string {
  let letters: string[] = [...text],
    counter: number = 0;
  for (let i = 0; i < letters.length; i++)
    if (letters[i] === oldValue) {
      counter++;
      if (!(counter % n)) letters[i] = newValue;
    }
  return n < 1 ? text : letters.join('');
}
