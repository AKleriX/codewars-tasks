const chirp = (n) => (n > 1 ? 'chirp-' + chirp(n - 1) : 'chirp');
