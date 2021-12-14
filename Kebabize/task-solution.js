function kebabize(str) {
    return str.replace(/[^a-z]/gi, '').split('').map((symbol, i) => {
        if ((symbol === symbol.toUpperCase()) && (i > 0))
            return '-' + symbol.toLowerCase();
        return symbol.toLowerCase();
    }).join('');
}