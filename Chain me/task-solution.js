const chain = (input, fs) => fs.reduce((val, f) => f(val), input);
