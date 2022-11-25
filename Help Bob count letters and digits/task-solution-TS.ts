export const countLettersAndDigits = (input: string): number =>
  input.replace(/[^a-z\d]/gi, '').length;
