const wordToBin = (str) =>
  [...str].map((l) => ('0'.repeat(8) + l.charCodeAt().toString(2)).slice(-8));
