const uniteUnique = (...arrs) => Array.from(new Set(arrs.reduce((c, a) => c.concat(a))));
