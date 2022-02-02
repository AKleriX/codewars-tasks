const anagrams = (word, words) => {
    let sortWord = [...word].sort().join('');
    return words.reduce((anags, currentWord) => sortWord === [...currentWord].sort().join('') ? (anags.push(currentWord), anags) : anags, []);
  };