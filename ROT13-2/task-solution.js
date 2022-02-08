function rot13(str) {
    return str.replace(/[a-z]/ig, letter => String.fromCharCode(letter.charCodeAt(0) + (/[a-m]/i.test(letter) ? 13 : -13)));
  }