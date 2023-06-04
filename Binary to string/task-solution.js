const binaryToString = (binary) =>
  String.fromCharCode(
    ...binary
      .split('0b')
      .slice(1)
      .map((c) => parseInt(c, 2)),
  );
