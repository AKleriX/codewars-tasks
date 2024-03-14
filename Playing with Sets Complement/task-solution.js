const diff = (s1, s2) => new Set(Array.from(s1).filter((el) => !s2.has(el)));
