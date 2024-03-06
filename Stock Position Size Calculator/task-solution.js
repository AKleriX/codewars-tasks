const positionSize = (tradeType, entryPrice, stoploss, capital, riskPercentage) => {
  if (
    (tradeType === 'LONG' && entryPrice <= stoploss) ||
    (tradeType === 'SHORT' && entryPrice >= stoploss)
  )
    return false;
  let dif = Math.abs(entryPrice - stoploss),
    p = (capital / 100) * riskPercentage;
  return Math.round(p / dif);
};
