Math.ceil = (x) => (x % 1 ? x - (x % 1) + 1 : x);

Math.floor = (x) => x | 0;

Math.round = (x) => (x % 1 < 0.5 ? Math.floor(x) : Math.ceil(x));

Math.abs = (x) => (x < 0 ? x * -1 : x);

Math.max = (...n) => n.sort((a, b) => b - a)[0];

Math.min = (...n) => n.sort((a, b) => a - b)[0];

Math.pow = (x, p) => x ** p;
