const isOrthogonal = (u, v) => u.reduce((s, a, i) => s + a * v[i], 0) === 0;
