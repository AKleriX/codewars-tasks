const isLucky = (n) => !([...n.toString()].reduce((s, n) => s + +n, 0) % 9);
