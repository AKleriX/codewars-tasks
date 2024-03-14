const actuallyReallyGood = (foods) => {
  const uniqFoods = [...new Set(foods.map((f) => f.toLowerCase()))];
  return `You know what's actually really good? ${
    !uniqFoods.length ? 'Nothing!' : uniqFoods[0][0].toUpperCase() + uniqFoods[0].slice(1)
  }${
    uniqFoods.length === 1
      ? ' and more ' + uniqFoods[0] + '.'
      : uniqFoods.length
      ? ' and ' + uniqFoods[1] + '.'
      : ''
  }`;
};
