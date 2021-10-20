function decodeTheMorseCode(morseCode){
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
