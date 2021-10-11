function combine(value, dices) {
    let combs = 0;
    for (let die = 1; die < 7; die++){
        if (dices > 1)
            combs += combine (value - die, dices - 1);
        else if (die === value)
            return 1;
    }
    return combs;
}

function rolldiceSumProb(arr, totalSides){
    let combs = combine(arr, totalSides);
    return combs / Math.pow(6, totalSides);
}