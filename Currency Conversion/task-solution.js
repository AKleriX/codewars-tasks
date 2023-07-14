function convertMyDollars(usd, currency) {
  return `You now have ${
    usd * parseInt(CONVERSION_RATES[currency], /[^aeoui]/i.test(currency[0]) ? 2 : 10)
  } of ${currency}.`;
}
