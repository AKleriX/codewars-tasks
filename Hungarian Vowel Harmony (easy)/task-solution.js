const dative = (word) =>
  /[eéiíöőüű]/.test(word.replace(/[^eéiíöőüűaáoóuú]/g, '').slice(-1)) ? word + 'nek' : word + 'nak';
