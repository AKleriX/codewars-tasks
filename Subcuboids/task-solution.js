const subcuboids = (...d) => d.reduce((c, v) => c * getDCounter(v), 1n);

const getDCounter = (n) => (n * (n + 1n)) / 2n;
