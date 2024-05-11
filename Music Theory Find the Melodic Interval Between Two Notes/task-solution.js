const getInterval = (note1, note2) => {
  const dict = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  return (
    1 + Math.abs(+note1[1] * 7 + dict.indexOf(note1[0]) - (+note2[1] * 7 + dict.indexOf(note2[0])))
  );
};
