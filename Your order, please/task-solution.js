function order(words){
    let resultStr = [];
    words.split(' ').forEach(word => {
        resultStr[word.match(/\d/) - 1] = word;
    });
    return resultStr.join(' ');
}