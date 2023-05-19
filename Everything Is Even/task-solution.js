const ensureEven = (n) => (Math.trunc(n) % 2 ? Math.trunc(n + (n < 0 ? -1 : 1)) : Math.trunc(n));
