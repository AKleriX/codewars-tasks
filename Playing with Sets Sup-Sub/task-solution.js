const isSubsetOf = (s1, s2) => Array.from(s1).every((el) => s2.has(el));

const isSupersetOf = (s1, s2) => isSubsetOf(s2, s1);
