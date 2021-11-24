function stringTransformer(str) {
    return str.split(' ').reverse().join(' ')
        .split('').map(symbol => symbol === symbol.toUpperCase() ? symbol.toLowerCase() : symbol.toUpperCase()).join('');
}