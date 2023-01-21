const isTriangular = (t, i = 1) => (t > 0 ? isTriangular(t - i, ++i) : !t ? true : false);
