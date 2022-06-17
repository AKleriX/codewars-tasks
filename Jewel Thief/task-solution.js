const crack = function (safe) {
  let comb = 'L00-L00-L00';
  while (safe.unlock(comb) !== 'click-click-click') {
    let clicks = safe.unlock(comb).split('-'),
      arrComb = comb.split('-');
    comb = arrComb
      .map((c, i) => {
        if (clicks[i] === 'click' || (clicks[i - 1] !== 'click' && clicks[i] !== '')) return c;
        let [l, n1, n2] = c.split('');
        if (l === 'L' && n1 + n2 === '99') return 'R00';
        if (n2 === '9') return `${l}${+n1 + 1}0`;
        return `${l + n1}${+n2 + 1}`;
      })
      .join('-');
  }
  return safe.open();
};
