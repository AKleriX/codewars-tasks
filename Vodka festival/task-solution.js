function vodkaConsumption(shots) {
  return (
    Math.round(
      shots.reduce((ml, c) => {
        let mul = c.replace(/[\d.,]/g, '') === 'ml' ? 1 : 1000;
        return ml + +c.replace(/[ml]/g, '') * mul;
      }, 0),
    ) + 'ml'
  );
}
