const lenR = (x) => (x.length ? lenR(x.slice(0, -1)) + 1 : 0);
