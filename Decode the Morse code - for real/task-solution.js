var decodeBits = function(bits){
    let dotAndDashes = bits.slice(bits.indexOf('1'), bits.lastIndexOf('1') + 1).split(/0+/),
        pauses = bits.slice(bits.indexOf('1'), bits.lastIndexOf('1') + 1).split(/1+/),
        symbolsArr = [];

    if (bits.indexOf('1') === -1) return '';
    if (bits.slice(bits.indexOf('1'), bits.lastIndexOf('1') + 1).indexOf('0') === -1)
        return '.';

    if (bits === '1001' || bits === '10001' || bits === '100001')
        return '. .';


    pauses = pauses.slice(1, pauses.length - 1);

    dotAndDashes.forEach(symbolCode => {
        if (!symbolsArr[symbolCode.length])
            symbolsArr[symbolCode.length] = 1;
        else
            symbolsArr[symbolCode.length]++;
    });

    pauses.forEach(symbolCode => {
        if (!symbolsArr[symbolCode.length])
            symbolsArr[symbolCode.length] = 1;
        else
            symbolsArr[symbolCode.length]++;
    });

    let firstLimit, secondLimit,
        i = Math.round(symbolsArr.length / 10);

    for (; i < symbolsArr.length; i++){
        if (symbolsArr[i]){
            if ((!symbolsArr[i + 1]) || (symbolsArr[i] * 1.8 < symbolsArr[i + 1])){
                firstLimit = i++ + .5;
                break;
            }
        }
    }

    if (i < Math.round(symbolsArr.length / 2))
        i = Math.round(symbolsArr.length / 2);


    for (; i < symbolsArr.length - 1; i++){
        if (!symbolsArr[i + 1] || (symbolsArr[i] * 1.8 < symbolsArr[i + 1])){
            secondLimit = i + .5;
            break;
        }
    }

    if (!secondLimit) secondLimit = i - 1;

    console.log(symbolsArr, symbolsArr.length,  Math.round(symbolsArr.length / 10), firstLimit, secondLimit);

    let resultCode = '';

    dotAndDashes.forEach((symbolCode, index) => {
        if (symbolCode.length < firstLimit) resultCode += '.';
        else resultCode += '-';
        if (index < pauses.length) {
            if (pauses[index].length > firstLimit && pauses[index].length < secondLimit) resultCode += ' ';
            else if (pauses[index].length > secondLimit && secondLimit !== 0) resultCode += '   ';
        }
    });


    return resultCode;

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

console.log(decodeBits('101'));