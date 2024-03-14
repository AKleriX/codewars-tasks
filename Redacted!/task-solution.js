const redacted = (doc1, doc2) => {
  const docPattern = new RegExp(
    '^' +
      doc1.replace(/[\^\$\.\+\?\*\(\)\[\]\{\}\|\\]/g, (s) => '\\' + s).replace(/X/g, '[^\n]') +
      '$',
  );
  return docPattern.test(doc2);
};
