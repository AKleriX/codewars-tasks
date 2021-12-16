const numbersDictionary = {
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '0': 'Zero',
}

function to_nato(words) {
    console.log(words);
    return words.split('').map(symbol => {
        if (/[a-z]/i.test(symbol)) return NATO[symbol.toLowerCase()];
        if (/\d+/.test(symbol)) return numbersDictionary[symbol];
        return symbol;
    }).filter(symbol => symbol !== ' ').join(' ');
}