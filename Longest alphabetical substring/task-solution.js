function longest(str) {
    let alphSubstr = str[0],
        maxLongestAlphStr = str[0];
    for (let i = 1; i < str.length; i++){
      let codeLastAlphLetter = alphSubstr[alphSubstr.length - 1].charCodeAt(),
          codeLastLetter = str[i].charCodeAt();
      if (codeLastAlphLetter <= codeLastLetter)
        alphSubstr += str[i];
      else {
        if (maxLongestAlphStr.length < alphSubstr.length) maxLongestAlphStr = alphSubstr;
        alphSubstr = str[i];
      }
    }
    return maxLongestAlphStr.length < alphSubstr.length ? alphSubstr : maxLongestAlphStr;
  }