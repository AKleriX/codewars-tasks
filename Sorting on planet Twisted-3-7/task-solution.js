function sortTwisted37(array) {
    return [...array].sort((a, b) => {
      let corA = Number(a.toString().replace(/(3)|(7)/g, (match) => match === '3' ? 7 : 3)),
          corB = Number(b.toString().replace(/(3)|(7)/g, (match) => match === '3' ? 7 : 3));
      return corA - corB;
    });
  }