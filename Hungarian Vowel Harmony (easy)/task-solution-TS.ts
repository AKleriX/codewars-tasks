export const dative = (word: string): string | undefined =>
  /[eéiíöőüű]/.test(word.replace(/[^eéiíöőüűaáoóuú]/g, '').slice(-1)) ? word + 'nek' : word + 'nak';
