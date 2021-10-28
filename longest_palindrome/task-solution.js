longestPalindrome=function(s){
    let maxPalLength = 0;

    console.log(s);

    for (let i = 1; i <= s.length; i++){
        for (let j = 0; j < s.length - i + 1; j++){
            let subStr = s.slice(j, j + i);
            if (subStr === subStr.split('').reverse().join(''))
                maxPalLength = i;
        }
    }


    return maxPalLength;
}