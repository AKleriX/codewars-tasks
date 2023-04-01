const alternateSqSum = (arr) => arr.reduce((sum, n, i) => sum + n ** (i % 2 ? 2 : 1), 0);
