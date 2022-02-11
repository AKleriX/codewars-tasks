const CaesarCipher = function (shift) {
    this.shift = shift % 26 ? shift % 26 : 26;
  };
  
  CaesarCipher.prototype.encode = function (str){
    return str.replace(/[a-z]/ig, letter => {
      return String.fromCharCode((letter.toUpperCase().charCodeAt(0) - 65 + this.shift) % 26 + 65);
    })
  };
  
  CaesarCipher.prototype.decode = function (str){
    return str.replace(/[a-z]/ig, letter => {
      let newLetterCode = letter.toUpperCase().charCodeAt(0) - 65 - this.shift;
      return String.fromCharCode(newLetterCode < 0 ?  91 + newLetterCode : newLetterCode + 65);
    })
  };