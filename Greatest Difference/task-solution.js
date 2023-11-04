const diff = (str) => {
  let biggest = [str[0].split('-')[0] - str[0].split('-')[1], 0];
  for (let i = 1; i < str.length; i++) {
    const dif = str[i].split('-')[0] - str[i].split('-')[1];
    if (Math.abs(dif) > Math.abs(biggest[0])) biggest = [dif, i];
  }
  return biggest[0] ? str[biggest[1]] : false;
};
