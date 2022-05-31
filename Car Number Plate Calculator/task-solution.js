function findTheNumberPlate(customerID) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  let num = (customerID % 999) + 1,
    series =
      abc[Math.floor(customerID / 999) % 26] +
      abc[Math.floor(customerID / (999 * 26)) % 26] +
      abc[Math.floor(customerID / (999 * 26 ** 2)) % 26];
  return series + getZeros(num);
}

const getZeros = (n) => '0'.repeat(3 - n.toString().length) + n.toString();
