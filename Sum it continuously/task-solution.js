const add = (arr) => arr.map((v, i, a) => v + a.slice(0, i).reduce((s, n) => s + n, 0));
