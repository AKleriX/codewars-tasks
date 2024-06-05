const commas = (num) => {
  const rNum = num.toFixed(3),
    [int, dec] = rNum.split('.'),
    intCom = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return dec !== '0'.repeat(dec.length) ? `${intCom}.${dec.replace(/0+$/, '')}` : intCom;
};
