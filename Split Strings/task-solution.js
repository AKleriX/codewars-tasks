function solution(str){
    let splitStr = [],
        splitIndex = 0;
    str = str.split('');
    for (let i = 0; i < str.length; i++){
        if (!splitStr[splitIndex]) splitStr[splitIndex] = str[i];
        else {
            splitStr[splitIndex] += str[i];
            splitIndex++;
        }
    }
    if (str.length % 2) splitStr[splitIndex] += '_';
    return splitStr;
}