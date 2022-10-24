function decrypt(encryption) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let lettersCounter = new Array(26).fill(0);
  (encryption.match(/([a-z])\1*/g) || []).forEach(
    (l) => (lettersCounter[abc.indexOf(l[0])] += l.length),
  );
  return lettersCounter.join('');
}
