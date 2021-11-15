function duplicateCount(text){
    let doubleSymbol = new Set();
    return text.toLowerCase().split('').filter((symbol, index) =>{
        if (text.toLowerCase().split('').indexOf(symbol, index + 1) !== -1 && !doubleSymbol.has(symbol)){
            doubleSymbol.add(symbol);
            return true;
        }
        return false;
    }).length;
}