const inter = (s1, s2) => {
  const intSet = new Set();
  for (let i of s1) if (s2.has(i)) intSet.add(i);
  return intSet;
};
