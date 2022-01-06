function alphabetized(s) {
    let sortStr = '';
    for (let i = 97; i < 123; ++i)
      for (let j = 0; j < s.length; j++)
        if (s[j].toLowerCase().charCodeAt() === i)
          sortStr += s[j];
    return sortStr;
  }