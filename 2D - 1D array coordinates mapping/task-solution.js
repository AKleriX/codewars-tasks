const to1D = (x, y, size) => y * size[0] + x;

const to2D = (n, size) => [n % size[0], (n / size[0]) | 0];
