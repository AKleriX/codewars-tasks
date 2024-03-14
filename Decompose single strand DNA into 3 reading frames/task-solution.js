const decomposeSingleStrand = (singleStrand) => {
  const frame1 = [],
    frame2 = [],
    frame3 = [];
  for (let i = 0; i < singleStrand.length; i += 3) {
    frame1.push(singleStrand.slice(i, i + 3));
    frame2.push(singleStrand.slice(i - 2 < 0 ? 0 : i - 2, i + 1));
    frame3.push(singleStrand.slice(i - 1 < 0 ? 0 : i - 1, i + 2));
  }
  frame2.push(singleStrand.slice(-2));
  frame3.push(singleStrand.slice(-1));
  return `Frame 1: ${frame1.join(' ')}\nFrame 2: ${frame2.join(' ')}\nFrame 3: ${frame3.join(' ')}`;
};
