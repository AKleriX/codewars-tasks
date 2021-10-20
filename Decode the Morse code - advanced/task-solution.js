var decodeBits = function(bits){
    let symbols = bits.split(/0+/),
        indexFirstOne = bits.indexOf('1'),
        indexLastOne = bits.lastIndexOf('1'),
        pauses = bits.slice(indexFirstOne, indexLastOne + 1).split(/1+/),
        pauseLength = Infinity,
        dotLength = Infinity,
        dashLength,
        wordPauseLength,
        betweenWordPauseLength;

    if (bits.slice(indexFirstOne, indexLastOne + 1).indexOf('0') === -1){
        symbols.forEach(symbol =>{
            if ((symbol.length < dotLength) && (symbol.indexOf('1') !== -1))
                dotLength = symbol.length;
        });

        dashLength = dotLength * 3;
        pauseLength = dotLength;
        wordPauseLength = dashLength;
        betweenWordPauseLength = dotLength * 7;
    } else {
        pauses.forEach(pause =>{
            if ((pause.length < pauseLength) && (pause.indexOf('0') !== -1))
                pauseLength = pause.length;
        });

        symbols.forEach(symbol =>{
            if ((symbol.length < dotLength) && (symbol.indexOf('1') !== -1))
                dotLength = symbol.length;
        });

        dotLength = pauseLength < dotLength ? pauseLength : dotLength;
        dashLength = dotLength * 3;
        wordPauseLength = dashLength;
        betweenWordPauseLength = dotLength * 7;
    }



    bits = bits.replace(new RegExp(`1{${dashLength}}`, 'g'), '-')
        .replace(new RegExp(`1+`, 'g'), '.')
        .replace(new RegExp(`0{${betweenWordPauseLength}}`, 'g'), '   ')
        .replace(new RegExp(`0{${wordPauseLength}}`, 'g'), ' ')
        .replace(new RegExp(`0+`, 'g'), '');


    return bits.trim();
}

var decodeMorse = function(morseCode){
    let words = morseCode.trim().split('   '),
        resultStr = '';

    words.forEach(word =>{
        let decodeWord = '';
        word.split(' ').forEach(symbol => {
            decodeWord += MORSE_CODE[symbol];
        });
        resultStr += `${decodeWord} `;
    });

    return resultStr.trim();
}