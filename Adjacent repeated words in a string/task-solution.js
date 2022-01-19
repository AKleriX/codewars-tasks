function countAdjacentPairs(searchString) {
    let words = searchString.toLowerCase().split(' '),
        counter = 0;
    for (let i = 0; i < words.length - 1; i++)
      if (words[i] === words[i + 1] && words[i] !== words[i - 1])
        counter++;  
    return counter;
  }