const areEqual = (s1, s2) => {
  const s1Arr = Array.from(s1),
    s2Arr = Array.from(s2);
  return s1Arr.every((el) => s2.has(el)) && s2Arr.every((el) => s1.has(el));
};

const notEqual = (s1, s2) => !areEqual(s1, s2);
