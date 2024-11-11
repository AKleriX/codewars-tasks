const decrypt = (s) => {
  for (let i = 1; i <= 10; i++) {
    let c = BigInt(i + s);
    if (!(c % 11n)) return (c / 11n).toString().replace(/^10/, '');
  }
  return 'impossible';
};
