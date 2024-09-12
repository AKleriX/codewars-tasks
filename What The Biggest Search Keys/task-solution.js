const theBiggestSearchKeys = (...w) => {
  const maxLength = Math.max(...w.map((keyword) => keyword.length));

  return (
    w
      .filter((keyword) => keyword.length === maxLength)
      .sort()
      .map((v) => "'" + v + "'")
      .join(', ') || "''"
  );
};
