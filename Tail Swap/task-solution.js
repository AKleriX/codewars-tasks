const tailSwap = (arr) => arr.map((s, i, a) => s.split(':')[0] + ':' + a[i ? 0 : 1].split(':')[1]);
