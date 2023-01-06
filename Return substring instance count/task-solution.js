const solution = (fullText, searchText) =>
  (fullText.match(new RegExp(searchText, 'g')) || []).length;
