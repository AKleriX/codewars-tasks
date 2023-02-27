function totalBill(str) {
  let counter = 0,
    bill = 0;
  for (let i = 0; i < str.length; i++) if (str[i] === 'r' && ++counter % 5) bill += 2;
  return bill;
}
