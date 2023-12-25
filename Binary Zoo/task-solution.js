const countTheAnimals = (animals) => Object.values(animals).reduce((s, b) => s + parseInt(b, 2), 0);
