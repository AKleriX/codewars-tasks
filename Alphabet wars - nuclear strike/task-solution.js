function alphabetWar(battlefield) {

    if (battlefield.indexOf('#') === -1)
        return battlefield.replace(/\[/g, '').replace(/\]/g, '');

    let resultAbc = '',
        includeNum = 0;

    while (battlefield.indexOf('[', includeNum) !== -1){
        let indexOpen = battlefield.indexOf('[', includeNum),
            indexClose = battlefield.indexOf(']', includeNum),
            checkBackPos = indexOpen - 1,
            checkNextPos = indexClose + 1,
            nuclearCount = 0;
        includeNum =  battlefield.indexOf(']', includeNum) + 1;

        while (checkBackPos >= 0 || checkNextPos < battlefield.length){

            if (battlefield[checkBackPos] === '#'){
                nuclearCount++;
                checkBackPos--;
            } else if (battlefield[checkBackPos] !== ']')
                checkBackPos--;
            if (battlefield[checkNextPos] === '#'){
                nuclearCount++;
                checkNextPos++;
            } else if (battlefield[checkNextPos] !== '[')
                checkNextPos++;

            if (nuclearCount >= 2)
                break;

            if ((battlefield[checkNextPos] === '[' || checkNextPos >= battlefield.length) &&
                (battlefield[checkBackPos] === ']' || checkBackPos < 0)){
                resultAbc += battlefield.slice(indexOpen + 1, indexClose);
                break;
            }
        }
    }

    return resultAbc ;
}
