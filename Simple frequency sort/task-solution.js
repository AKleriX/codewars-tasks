function solve(arr){
    let symbolsCounter = arr.reduce((counter, item) => {
        if (counter.hasOwnProperty(item)) counter[item]++;
        else counter[item] = 1;
        return counter;
    }, {});
    return [...arr].sort((a,b) => symbolsCounter [b] - symbolsCounter[a] || a - b);
}