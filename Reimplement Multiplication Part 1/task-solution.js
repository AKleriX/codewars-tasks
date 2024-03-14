const mul = (a, b) => (!a || !b ? 0 : a === 1 ? b : b + mul(a - 1, b));
