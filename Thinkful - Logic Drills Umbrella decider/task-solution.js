const takeUmbrella = (weather, chance) =>
  weather === 'rainy' || (weather === 'cloudy' && chance > 0.2) || chance > 0.5;
