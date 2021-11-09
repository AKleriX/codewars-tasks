function longestRepetition(s) {
    let symbolsCounter = {},
        maxCounter = ['',0];
    for (let i = 0; i < s.length; i++){
        if (symbolsCounter.hasOwnProperty(s[i]))
            symbolsCounter[s[i]]++;
        else symbolsCounter[s[i]] = 1;
        if (s[i] !== s[i + 1]){
            if (maxCounter[1] < symbolsCounter[s[i]]){
                maxCounter[0] = s[i];
                maxCounter[1] = symbolsCounter[s[i]];
            }
            symbolsCounter[s[i]] = 0;
        }
    }
    return maxCounter;
}