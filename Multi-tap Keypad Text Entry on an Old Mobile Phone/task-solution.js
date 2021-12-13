const layout = ['1',
    'abc2',
    'def3',
    'ghi4',
    'jkl5',
    'mno6',
    'pqrs7',
    'tuv8',
    'wxyz9',
    '*',
    ' 0',
    '#'];

function presses(phrase) {
    return phrase.split('').reduce((sum, symbol) => {
        let pressCounter = 1;
        for (let i = 0; i < layout.length; i++)
            if (layout[i].indexOf(symbol.toLowerCase()) > -1){
                pressCounter += layout[i].indexOf(symbol.toLowerCase());
                break;
            }
        return sum + pressCounter;
    }, 0);
}