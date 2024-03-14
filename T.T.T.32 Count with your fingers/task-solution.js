const whichFinger = (n) => {
  const f = ['Thumb', 'Index finger', 'Middle finger', 'Ring finger', 'Little finger'];
  let currentFing = 0,
    m = 1;
  for (let i = 1; i < n; i++) {
    if (currentFing === 4) m = -1;
    else if (currentFing === 0) m = 1;
    currentFing += m;
  }
  return f[currentFing];
};
