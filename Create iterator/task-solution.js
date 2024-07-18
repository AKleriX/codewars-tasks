const createIterator = (array) => {
  let index = 0;

  return {
    get index() {
      return index;
    },

    next() {
      return {
        value: array[index],
        done: index >= array.length ? true : (index++, false),
      };
    },
  };
};
