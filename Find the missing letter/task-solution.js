function toCamelCase(str){
    let words = str.split(/-|_/),
        resultStr = '';

    resultStr += words[0];

    for (let wordIndex = 1; wordIndex < words.length; wordIndex++)
        resultStr += words[wordIndex][0].toUpperCase() + words[wordIndex].slice(1);

    return resultStr;

}