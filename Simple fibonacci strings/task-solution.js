const solve = (n) => (!n ? '0' : n === 1 ? '01' : solve(--n) + solve(--n));
