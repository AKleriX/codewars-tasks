const josephusSurvivor = (n, k) => n === 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1;