function count (string) {
    return string.split('').reduce((obj, symbol) => {
        if (obj.hasOwnProperty(symbol))
            obj[symbol]++;
        else obj[symbol] = 1;
        return obj;
    }, {});
}