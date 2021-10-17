function brainfuckTranslator(str) {
    let correctStr = '' + str.replace(/\s|[^+\-<>\[\].,]/g, ''),
        inspectStr;

    do {
        inspectStr = '' + correctStr;
        correctStr = correctStr.replace(/\+-|-\+|><|<>|\[]/g, '');
    }  while (correctStr.length !== inspectStr.length);

    correctStr = correctStr.split('');

    let resultCCode = '',
        inspectError = false,
        sumCounter = 0,
        ifCounter = '';

    correctStr.forEach((item, index) => {
        if (index > 0) {
            if ((item !== correctStr[index - 1]) && (sumCounter !== 0)){
                resultCCode += sumCodeTranslator(correctStr[index - 1], sumCounter, ifCounter);
                sumCounter = 0;
            }
        }

        switch (item) {
            case '[':
                resultCCode += `${ifCounter}if (\*p) do {\n`;
                ifCounter += '  ';
                break;
            case ']':
                if (ifCounter !== '') {
                    ifCounter = ifCounter.slice(0, ifCounter.length - 2);
                    resultCCode += `${ifCounter}} while (\*p);\n`;
                } else inspectError = true;
                break;
            case '.':
                resultCCode += `${ifCounter}putchar(\*p);\n`;
                break;
            case ',':
                resultCCode += `${ifCounter}\*p = getchar();\n`;
                break;
            default:
                break;
        }

        if (item === '+' || item === '-' || item === '<' || item === '>')
            sumCounter++;
    });

    if (sumCounter > 0) {
        resultCCode += sumCodeTranslator(correctStr[correctStr.length - 1], sumCounter, ifCounter);
        sumCounter = 0;
    }

    return (inspectError || ifCounter !== '') ? 'Error!' : resultCCode;
}

function sumCodeTranslator(symbol, sum, shift) {
    let resCode = '';

    switch (symbol) {
        case '+':
            resCode += `${shift}\*p += ${sum};\n`;
            break;
        case '-':
            resCode += `${shift}\*p -= ${sum};\n`;
            break;
        case '>':
            resCode += `${shift}p += ${sum};\n`;
            break;
        case '<':
            resCode += `${shift}p -= ${sum};\n`;
            break;
        default:
            break;
    }

    return resCode;
}

console.log(brainfuckTranslator(''));