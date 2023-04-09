function calculate_total(subtotal, tax, tip) {
  const onePer = subtotal / 100;
  return Math.round((subtotal + tax * onePer + tip * onePer) * 100) / 100;
}
