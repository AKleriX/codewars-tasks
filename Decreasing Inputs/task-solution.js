const add = (...args) => Math.round(args.reduce((s, n, i) => s + n / (i + 1), 0));
