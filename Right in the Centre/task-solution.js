function isInMiddle(seq) {
  const sideLen = (seq.length - 3) / 2;
  return (
    (!(sideLen % 1) && seq.slice(sideLen, -sideLen || undefined) === 'abc') ||
    (sideLen % 1 !== 0 &&
      (seq.slice(Math.floor(sideLen), -Math.ceil(sideLen)) === 'abc' ||
        seq.slice(Math.ceil(sideLen), -Math.floor(sideLen) || undefined) === 'abc'))
  );
}
