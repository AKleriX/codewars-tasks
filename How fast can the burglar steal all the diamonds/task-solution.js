const diamondBurglar = (locker) =>
  locker.join('.').replace(/\*\*|\./g, (p) => (p === '.' ? '' : '*')).length;
