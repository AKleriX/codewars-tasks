const currencyBRL = (number = 0) => {
  const int = Math.floor(number).toString(),
    dec = Math.round((number % 1) * 100).toString();
  return `R$ ${int},${('0' + dec).slice(-2)}`;
};
