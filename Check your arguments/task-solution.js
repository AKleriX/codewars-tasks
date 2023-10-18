const objectType = (...args) => Object.prototype.toString.call(args.length ? args[0] : null);
