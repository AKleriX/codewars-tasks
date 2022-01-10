function arrange(strng) {
    let words = strng.split(' ');
    for (let i = 0; i < words.length - 1; i++){
      if ((i % 2 && words[i].length < words[i + 1].length) ||
         (!(i % 2) && words[i].length > words[i + 1].length))
         [words[i], words[i + 1]] = [words[i + 1], words[i]];
      if (i % 2) words[i] = words[i].toUpperCase();
      else words[i] = words[i].toLowerCase();    
    }
    if (words.length % 2) words[words.length - 1] = words[words.length - 1].toLowerCase();
    else words[words.length - 1] = words[words.length - 1].toUpperCase();
    return words.join(' ');
  }