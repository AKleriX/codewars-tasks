const onlyOne = (...flags) => flags.reduce((s, f) => s + !!f, 0) === 1;
