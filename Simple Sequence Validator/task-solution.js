const validateSequence = (x) => x.every((v, i, a) => !i || v - a[i - 1] === a[1] - a[0]);
