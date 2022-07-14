function decryptPassword(p) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return p
    .slice(0, p.lastIndexOf('-'))
    .split('-')
    .map((n) => alphabet[+n])
    .join('');
}
