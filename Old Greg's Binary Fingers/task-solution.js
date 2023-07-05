const binaryFingers = (binString) =>
  [...binString.padStart(5, '0')]
    .map((f, i) => (!+f ? '' : ['Pinkie', 'Ring', 'Middle', 'Index', 'Thumb'][i]))
    .filter((f) => f.length);
