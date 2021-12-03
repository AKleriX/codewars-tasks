function numericals(s){
    let symbols = new Map();
    return s.split('').map(symbol => {
        if (symbols.has(symbol)) {
            symbols.set(symbol, symbols.get(symbol) + 1);
            return symbols.get(symbol);
        } else {
            symbols.set(symbol, 1);
            return symbols.get(symbol);
        }
    }).join('');
}