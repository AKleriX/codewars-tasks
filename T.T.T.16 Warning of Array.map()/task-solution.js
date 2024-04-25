const warning = (arr, func) =>
  arr.every((el) => {
    try {
      func(el);
      return true;
    } catch (er) {
      return false;
    }
  })
    ? 'Passed!'
    : 'Failed!';
