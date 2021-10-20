function dubEncode(str) {
    let dubSymbols = new Set();

    return str.toLowerCase().split('').map((symbol, index) => {
        if ((str.toLowerCase().indexOf(symbol, index + 1) !== -1) || dubSymbols.has(symbol)){
            dubSymbols.add(symbol);
            return ')';
        }
        return '(';
    }).join('');
}

console.log(dubEncode('recede'));

