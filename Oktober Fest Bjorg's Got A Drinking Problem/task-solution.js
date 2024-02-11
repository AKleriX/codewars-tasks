const gameOfFives = (bavarianBeerBears, scandinavianSchöllers) =>
  bavarianBeerBears.filter((n) => n === 5).length ===
  scandinavianSchöllers.filter((n) => n === 5).length
    ? 'Drinks All Round! Free Beers on Bjorg!'
    : "Uh Oh! Bjorg's a donut! No beer for anyone!";
