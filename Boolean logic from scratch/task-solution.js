const or = (a, b) => [a, b].map(Boolean).includes(true);

const xor = (a, b) => [a, b].reduce((a, b) => Boolean(a) !== Boolean(b));
