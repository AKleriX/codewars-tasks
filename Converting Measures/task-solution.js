function convertRecipe(recipe) {
  return recipe.replace(/([^\s]+) (tbsp|tsp)/g, (_, p1, p2) => {
    let num = isNaN(+p1) ? +p1.slice(0, p1.indexOf('/')) / +p1.slice(p1.indexOf('/') + 1) : +p1;
    return `${p1} ${p2} (${p2 === 'tbsp' ? Math.ceil(num * 15) : Math.ceil(num * 5)}g)`;
  });
}
