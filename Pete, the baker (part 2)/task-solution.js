function getMissingIngredients(recipe, added) {
  let maxCount = 0,
    leftAdd = {};
  for (let i in recipe) {
    let addIn = added[i] ? added[i] : 0;
    maxCount =
      maxCount > (Math.ceil(addIn / recipe[i]) || 1) ? maxCount : Math.ceil(addIn / recipe[i]) || 1;
  }
  for (let i in recipe)
    if (added[i] && recipe[i] * maxCount - added[i]) leftAdd[i] = recipe[i] * maxCount - added[i];
    else if (!added[i]) leftAdd[i] = recipe[i] * maxCount;
  return leftAdd;
}
