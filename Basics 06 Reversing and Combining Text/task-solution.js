function reverse_and_combine_text(str){
  let words = str.split(' ');
  while (words.length > 1){
    words = words.reduce((newWords, word, i, arr) => {
      if (i < arr.length - 1){
        if (!(i % 2)) newWords.push([...word].reverse().join('') + [...arr[i + 1]].reverse().join(''));
      } else if (arr.length % 2) newWords.push([...word].reverse().join(''));
      return newWords;
    }, []);
  }
  return words[0];
}