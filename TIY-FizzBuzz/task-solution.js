function tiyFizzBuzz(sentence) {
  return sentence.replace(/[a-z]/gi, (l) => {
    if (/[QWRTYPSDFGHJKLZXCBNMV]/.test(l)) return 'Iron';
    if (/[AEOUI]/.test(l)) return 'Iron Yard';
    if (/[aeoui]/.test(l)) return 'Yard';
    return l;
  });
}
