function Calculator(vatRate) {
  const convertVatRate = vatRate / 100;

  this.getNet = function (grossPrice) {
    return +(grossPrice - this.getVat(grossPrice)).toFixed(2);
  };

  this.getVat = function (grossPrice) {
    return +(grossPrice / (1 / convertVatRate + 1)).toFixed(2);
  };
}
