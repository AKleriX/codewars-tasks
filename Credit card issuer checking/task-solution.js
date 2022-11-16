function getIssuer(number) {
  let str = number.toString();
  return str.length === 15 && /^34|^37/.test(str)
    ? 'AMEX'
    : str.length === 16 && /^6011/.test(str)
    ? 'Discover'
    : str.length === 16 && /^51|^52|^53|^54|^55/.test(str)
    ? 'Mastercard'
    : (str.length === 13 || str.length === 16) && /^4/.test(str)
    ? 'VISA'
    : 'Unknown';
}
