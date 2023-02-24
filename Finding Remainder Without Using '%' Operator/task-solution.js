const remainder = (D, d) => (D >= d ? remainder(D - d, d) : D);
