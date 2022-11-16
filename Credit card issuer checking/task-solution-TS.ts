enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}

export const getIssuer = (x: number): Issuer => {
  let str: string = x.toString();
  return str.length === 15 && /^34|^37/.test(str)
    ? Issuer.AMEX
    : str.length === 16 && /^6011/.test(str)
    ? Issuer.Discover
    : str.length === 16 && /^51|^52|^53|^54|^55/.test(str)
    ? Issuer.Mastercard
    : (str.length === 13 || str.length === 16) && /^4/.test(str)
    ? Issuer.VISA
    : Issuer.Unknown;
};
