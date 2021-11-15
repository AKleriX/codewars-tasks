function high(x){
    let words = x.split(' '),
        maxValue = 0,
        indexMaxValue = 0,
        abcMap = {};

    for (let i = 1; i < 27; i++)
        abcMap[String.fromCharCode(i + 64).toLowerCase()] = i;

    words.forEach((word, index) => {
        let tempValue = 0;
        word.split('').forEach(letter => tempValue += abcMap[letter]);
        if (tempValue > maxValue){
            maxValue = tempValue;
            indexMaxValue = index;
        }
    });

    return words[indexMaxValue] || '';
}