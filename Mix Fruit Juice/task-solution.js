function mixFruit(arr) {
  const fruits = ['banana', 'orange', 'apple', 'lemon', 'grapes', 'avocado', 'strawberry', 'mango'];
  return Math.round(
    arr.reduce((sum, fruit) => {
      let fruitIndex = fruits.indexOf(fruit.toLowerCase());
      if (fruitIndex === -1) return sum + 9;
      if (fruitIndex > 4) return sum + 7;
      return sum + 5;
    }, 0) / arr.length,
  );
}
