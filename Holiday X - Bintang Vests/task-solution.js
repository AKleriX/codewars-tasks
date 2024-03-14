const vestBuy = (price, haggle) => {
  const dict = {
    light: 0.2,
    medium: 0.3,
    heavy: 0.4,
    walkandswear: 0.9,
  };
  return dict[haggle] ? price - price * dict[haggle] : 'Run!!';
};
