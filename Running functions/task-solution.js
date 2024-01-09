const running = (lst, fn) => lst.map((el, i, arr) => (!i ? el : arr.slice(0, i + 1).reduce(fn)));
