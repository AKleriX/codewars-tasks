const Converter = {
    toAscii: function (hex) {
      return hex.match(/.{2,2}/g).map(code => String.fromCharCode(parseInt(code, 16))).join('');
    },
    toHex: function (ascii) {
      return ascii.split('').map(symbol => {
        let hex = symbol.charCodeAt().toString(16).toLowerCase();
        return hex.length < 2 ? hex + '0' : hex;
      }).join('');
    }
  }