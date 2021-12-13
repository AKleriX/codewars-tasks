function rot13(message){
    return message.split('').map(symbol => {
        if (/[a-z]/i.test(symbol)){
            let isUpper = symbol === symbol.toUpperCase(),
                charCode = symbol.toUpperCase().charCodeAt() + 13,
                newSymbol = charCode > 90 ? String.fromCharCode(charCode - 26) : String.fromCharCode(charCode);
            return isUpper ? newSymbol : newSymbol.toLowerCase();
        } else return symbol;
    }).join('');
}