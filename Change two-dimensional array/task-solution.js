const matrix = (array) => array.map((a, i) => ((a[i] = a[i] < 0 ? 0 : 1), a));
