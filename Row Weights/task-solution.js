const rowWeights = (arr) => arr.reduce((rooms, n, i) => ((rooms[i % 2] += n), rooms), [0, 0]);
