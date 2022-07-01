function validRomans(arr) {
  return arr.filter(
    (n) =>
      /^(M{0,4})(C?M{0,3})(C?D{0,1})(C{0,3})(X?C{0,3})(X?L{0,1})(X{0,3})(IX|IV|V?I{0,3})$/.test(
        n,
      ) && n !== '',
  );
}
