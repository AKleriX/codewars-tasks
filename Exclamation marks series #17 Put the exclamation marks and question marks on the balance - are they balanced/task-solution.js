function symbolsCounter(str){
    return str.split('').reduce((count, symbol) => {
        switch(symbol){
            case '!':
                return count + 2;
            case '?':
                return count + 3;
            default:
                return count;
        }
    }, 0);
}

function balance(left,right){
    let leftCount = symbolsCounter(left),
        rightCount = symbolsCounter(right);
    if (leftCount === rightCount) return 'Balance';
    return leftCount > rightCount ? 'Left' : 'Right';
}