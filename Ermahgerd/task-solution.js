const ermahgerd = (s) =>
  s
    .toUpperCase()
    .replace(/[AEIOU]/g, 'ER')
    .replace(/ER(ER|H)/g, 'ER')
    .replace(/MY/g, 'MAH')
    .replace(/RR/g, 'R')
    .split(' ')
    .map((w) => (w.length > 4 ? w.replace(/ER([.,])?$/, '$1') : w))
    .join(' ');
