const superKeyGenerator = (n) => {
  let res = '-1';
  for (let i = 0; i <= n; i += 5) {
    let c = n - i;
    if (!(c % 3)) {
      let temp = '5'.repeat(c) + '3'.repeat(i);
      if (+temp > +res) res = temp;
    }
  }
  return res;
};
