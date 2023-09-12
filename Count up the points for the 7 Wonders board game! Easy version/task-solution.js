const solve = (...sets) => Math.min(...sets) * 7 + sets.reduce((sum, v) => sum + v ** 2, 0);
