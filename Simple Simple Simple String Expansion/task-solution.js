function stringExpansion(s) {
    let counter = 1,
        resStr = '';
    for (let i = 0; i < s.length; i++){
      if (/\d/.test(s[i])) counter = Number(s[i]);
      else resStr += s[i].repeat(counter);
    }
    return resStr;
  }