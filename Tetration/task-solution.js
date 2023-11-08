const tetration = (x, y) => (y < 1 ? 1 : y < 2 ? x : x ** tetration(x, y - 1));
