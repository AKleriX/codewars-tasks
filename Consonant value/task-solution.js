function solve(s) {
    let subStrMaxValue = 0;
    s = s.split(/[aeiou]+/).filter(subStr => subStr !== '');
    s.forEach(subStr =>{
        let subStrValue = subStr.split('').reduce((value, letter) => value + (letter.toUpperCase().charCodeAt() - 64), 0);
        if (subStrMaxValue < subStrValue) subStrMaxValue = subStrValue;
    });
    return subStrMaxValue;
}