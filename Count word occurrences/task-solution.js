const wordCounter = (text) => {
  const splitString = (input, pattern) => {
      return input.split(pattern).filter((item) => item);
    },
    words = splitString(text, /[,.\s]/);

  return {
    count: (searchWord) => {
      if (!words.length) return 0;
      let count = 0;
      for (let i = 0; i < words.length; i++) {
        const index = words.indexOf(searchWord, i);
        if (index === -1) break;
        count++;
        i = index;
      }
      return count;
    },
  };
};
