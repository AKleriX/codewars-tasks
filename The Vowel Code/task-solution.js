function encode(string) {
    const code = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5
    }
    return string.split('').map(letter => code.hasOwnProperty(letter) ? code[letter] : letter).join('');
}

function decode(string) {
    const deCode = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u'
    }
    return string.split('').map(letter => deCode.hasOwnProperty(letter) ? deCode[letter] : letter).join('');
}