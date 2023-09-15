const binStr = (s) => [...s].reduce((f, b) => (b !== f[1] ? [f[0] + 1, b] : f), [0, '0'])[0];
