function solution(string) {
    return string.split('').reduce((str, symbol) => {
        if (symbol.toUpperCase() === symbol)
            return str + ' ' + symbol;
        return str + symbol;
    },'');
}