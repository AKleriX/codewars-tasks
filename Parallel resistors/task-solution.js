const resistor_parallel = (...res) => res.reduce((s, r) => s + r ** -1, 0) ** -1;
